import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import PostDetails, { loader as postLoader } from "./routes/PostDetails.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: "new-post",
                        element: <NewPost />,
                        action: newPostAction,
                    },
                    {
                        path: ":id",
                        element: <PostDetails />,
                        loader: postLoader,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
);
