import classes from "./NewPost.module.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import type { Post as PostType } from "../type/post.ts";
import type { FormEvent } from "react";
import { useNewPost } from "../hooks/useNewPost.ts";

function NewPost() {

    // const { mutate, isPending, isError, error } = useMutation({
    //     mutationFn: createNewPost,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({
    //             queryKey: ["posts"],
    //         });
    //         navigate("/");
    //     },
    // });
    
    const { mutate, isPending, isError, error } = useNewPost();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const postData = Object.fromEntries(formData) as Omit<PostType, "id">;
        
        mutate(postData);
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        name="body"
                        required
                        rows={3}
                    />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="author"
                        required
                    />
                </p>
                {isError && (
                    <p style={{ color: 'red' }}>
                        Failed to post: {error instanceof Error ? error.message : 'Unknown error'}
                    </p>
                )}
                <p className={classes.actions}>
                    <Link to="..">
                        Cancel
                    </Link>
                    <button disabled={isPending}>
                        {isPending ? "Submitting..." : "Submit"}
                    </button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;


// export async function action({ request }: ActionFunctionArgs) {
//     const formData = await request.formData();
//     const postData = Object.fromEntries(formData) as Omit<PostType, "id">;

//     await createNewPost(postData);

//     queryClient.invalidateQueries({
//         queryKey: ["posts"],
//     });

//     return redirect("/");
// }
