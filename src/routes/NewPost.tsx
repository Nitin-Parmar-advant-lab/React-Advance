import classes from "./NewPost.module.css";
import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import type { ActionFunctionArgs } from "react-router-dom";
import type { Post as PostType } from "../type/post.ts";
import { createNewPost, queryClient } from "../util/http.ts";


function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
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
                <p className={classes.actions}>
                    <Link to="..">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;



export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData) as Omit<PostType, "id">;

    await createNewPost(postData);

    queryClient.invalidateQueries({
        queryKey: ["posts"],
    });

    return redirect("/");
}
