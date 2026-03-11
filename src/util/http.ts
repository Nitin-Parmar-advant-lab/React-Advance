import { QueryClient } from "@tanstack/react-query";
import type { Post as PostType } from "../type/post.ts";

export const queryClient = new QueryClient();

export async function fetchPosts() {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts.");
    }
    const data: { posts: PostType[] } = await response.json();
    return data.posts;
}

export async function fetchPost({ id }: { id: string }) {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch post.");
    }
    const data: { post: PostType } = await response.json();
    return data.post;
}

export async function createNewPost(postData: Omit<PostType, "id">) {
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error("Failed to create post.");
    }

    const { post } = await response.json();
    return post;
}
