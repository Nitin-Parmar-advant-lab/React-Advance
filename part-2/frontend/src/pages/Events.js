import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
    // We can useLoaderData() in the element that's assigned to a router AND in all components that might be used inside that element.

    const events = useLoaderData();
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;


export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
