import { Outlet } from "react-router-dom";
import PostList from "../components/PostList.jsx";
//import type { Post as PostType } from "../type/post.js";
import { fetchPosts, queryClient } from "../util/http.ts";

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

// Loader (Imperative) and this is not Component in thatwe have to write useQuerey (Declarative)

export function loader() {
    // rather then using fetcQuery we should use ensureQueryData because it checks the cache first if any data exists for that key—even if it is stale—it returns that data immediately and does not trigger a new fetch.

    queryClient.prefetchQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    return null;
}
