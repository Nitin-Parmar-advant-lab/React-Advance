import Post from "./Post.tsx";
import classes from "./PostsList.module.css";
import { useFetchPost } from "../hooks/useFetchPost.ts";
import type { Post as PostType } from "../type/post.ts";

export default function PostList() {
    const { data: posts, isLoading } = useFetchPost<PostType[]>();

    if (isLoading) {
        return (
            <div style={{ textAlign: "center", color: "white" }}>
                <p>Loading posts...</p>
            </div>
        );
    }

    return (
        <>
            {posts && posts.length > 0 && (
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

            {(!posts || posts.length === 0) && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>Could not find any posts.</p>
                    <p>Maybe create one?</p>
                </div>
            )}
        </>
    );
}