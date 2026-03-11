import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.js";
import PostDetails, { loader as postLoader } from "./routes/PostDetails.jsx";

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
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
