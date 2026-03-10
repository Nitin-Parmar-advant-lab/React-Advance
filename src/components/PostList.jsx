import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            body={post.body}
                            id={post.id}
                        />
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>Could not find any posts.</p>
                    <p>Maybe create one?</p>
                </div>
            )}
        </>
    );
}