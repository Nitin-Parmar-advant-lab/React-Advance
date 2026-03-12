import { useFetchPost } from "../hooks/useFetchPost.ts";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";
import type { Post as PostType } from "../type/post.ts";

function PostDetails() {
    const { id } = useParams();
    const { data: post, isLoading } = useFetchPost<PostType>(id!);

    if (isLoading) {
        return (
            <Modal>
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>Loading post details...</p>
                </div>
            </Modal>
        );
    }

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

// export function loader({ params }: LoaderFunctionArgs) {
//     const id = params.id;
//     if (!id) {
//         throw new Error("Post ID missing");
//     }
//     queryClient.prefetchQuery({
//         queryKey: ["posts", id],
//         queryFn: () => fetchPost({ id }),
//     });
//     return null;
// }
