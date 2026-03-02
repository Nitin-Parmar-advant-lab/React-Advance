// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
    // const [data, setData] = useState();
    // const [error, setError] = useState();
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {

    //     fetchEvents()
    //         .then((events) => {
    //             setData(events);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }, []);

    // by using this only we can achive one greate thing is fetch when focus shits
    // mean if we change the tab or change the appliction then when we can back to the site then it automaticlly fetch again the data from the server so we always get updated data
    // and also it enables cacheing automatically,
    // note: Images are fetched and (potentially) cached by the browser - React & ReactQuery are not invloved!
    // with staleTime we can add timing that after how much time new quest should send and greab new data from server, by default it is zero
    // use for not sending unnessarory reuqest
    // gcTime: garbage collection time it mean how long data should be cached, default is 5 min
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["events", { max: 3 }],
        queryFn: ({ signal, queryKey }) =>
            fetchEvents({ signal, ...queryKey[1] }),
        staleTime: 5000,
        // gcTime: 0,
    });

    let content;

    if (isPending) {
        content = <LoadingIndicator />;
    }

    if (isError) {
        content = (
            <ErrorBlock
                title="An error occurred"
                message={error.info?.message || "Failed to fetch events."}
            />
        );
    }

    if (data) {
        content = (
            <ul className="events-list">
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem event={event} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <section className="content-section" id="new-events-section">
            <header>
                <h2>Recently added events</h2>
            </header>
            {content}
        </section>
    );
}
