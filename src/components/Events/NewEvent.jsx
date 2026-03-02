import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
    const navigate = useNavigate();

    // for posting the data, use can also use useQuery but useMutation is more optimized
    // this mutate return function is very usefull because by using that in this component we can call this function anywhere
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: createNewEvent,
        onSuccess: () => {
            // this function run when this mutaion succeeded.
            queryClient.invalidateQueries({
                queryKey: ["events"],
            });
            navigate("/events");
        },
    });

    function handleSubmit(formData) {
        mutate({ event: formData });
    }

    return (
        <Modal onClose={() => navigate("../")}>
            <EventForm onSubmit={handleSubmit}>
                {isPending && "Submitting.."}
                {!isPending && (
                    <>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Create
                        </button>
                    </>
                )}
            </EventForm>
            {isError && (
                <ErrorBlock
                    title="Failed to create event"
                    message={
                        error.info?.message ||
                        "Failed to create event. Plase check your inputs and try again later."
                    }
                />
            )}
        </Modal>
    );
}
