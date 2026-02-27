import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
    const params = useParams();

    return (
        <>
            <h1>EventDetailsPage</h1>
            <p>Event ID: {params.id}</p>
        </>
    );
}
