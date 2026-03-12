import { QueryClient } from "@tanstack/react-query";
import type { Post as PostType } from "../type/post.ts";

export const queryClient = new QueryClient();

export async function fetchPostData({ id, signal }: { id?: string | undefined; signal: AbortSignal }) {
    let url = "http://localhost:8080/posts";
    if (id) {
        url += `/${id}`;
    }

    const response = await fetch(url, { signal });

    if (!response.ok) {
        const error = new Error(id ? "Failed to fetch post." : "Failed to fetch posts.");
        throw error;
    }

    const data = await response.json();
    return id ? data.post : data.posts;
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
