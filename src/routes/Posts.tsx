import { Outlet } from "react-router-dom";
import PostList from "../components/PostList.jsx";
import type { Post as PostType } from "../type/post.js";

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostList />
            </main>
        </>
    );
}

export default Posts;

export async function loader(): Promise<PostType[]> {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts.");
    }
    const data: { posts: PostType[] } = await response.json();
    return data.posts;
}