import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
    const submit = useSubmit();

    // this useSubmit used for sending specific data to the server not the full form
    // first argument we pass all the value of the form but here we don't want 
    // we pass method direct

    function startDeleteHandler() {
        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            submit(null, { method: "delete" });
        }
    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default EventItem;
