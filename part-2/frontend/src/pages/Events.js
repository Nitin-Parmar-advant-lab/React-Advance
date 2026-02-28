import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
    // We can useLoaderData() in the element that's assigned to a router AND in all components that might be used inside that element.

    // this useLoaderData is one that bring data from loader and give us
    // in this case we are passing that data to the another component
    // const data = useLoaderData();

    const { events } = useLoaderData();

    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    // const events = data.events;
    // return (
    //     <>
    //         <EventsList events={events} />
    //     </>
    // );

    return (
        <>
            <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
            {/* <EventsList events={events} /> */}
        </>
    );
}

export default EventsPage;

async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");
    // this fetch give as promist with Resonse object and we don't need to direct extract over data from that
    // so we can direct return what we get from the fetch
    // so as you can see below the useLoaderDatat we are directly extracting data, without extracting it using "dot json" method
    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events" };

        // by throwing error we will handle it on the routing declaration where we delcare errorElement for handing error and how error page
        // throw new Response(
        //     JSON.stringify({ message: "Coduld not fetch events" }),
        //     { status: 500 },
        // );

        // creating response like above will be lot of work
        // so we can use direclty this for same thing. it is part fo react-router-dom

        return JSON.stringify(
            { message: "Coduld not fetch events" },
            { status: 500 },
        );
    } else {
        const resData = await response.json();
        return resData.events;

        // return response;
    }
}

// remember this loader function is normal function not component so we can not use any hooks inside, and it has all browser default features like localstorage and all
export async function loader() {
    return {
        events: eventsLoader(),
    };
}
