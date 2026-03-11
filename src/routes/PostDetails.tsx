import { useLoaderData, Link, type LoaderFunctionArgs } from "react-router-dom";
import type { Post as PostType } from "../type/post.js";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
    const post = useLoaderData() as PostType;

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({ params }: LoaderFunctionArgs) {
    if (!params.id) {
        throw new Error("Post ID missing");
    }
    const response = await fetch("http://localhost:8080/posts/" + params.id);
    const data: { post: PostType } = await response.json();
    return data.post;
}
