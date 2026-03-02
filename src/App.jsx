import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import Events from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import EditEvent, {
    loader as editEventLoader,
    action as editEventAction,
} from "./components/Events/EditEvent.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/events" />,
    },
    {
        path: "/events",
        element: <Events />,

        children: [
            {
                path: "/events/new",
                element: <NewEvent />,
            },
        ],
    },
    {
        path: "/events/:id",
        element: <EventDetails />,
        children: [
            {
                path: "/events/:id/edit",
                element: <EditEvent />,
                loader: editEventLoader,
                action: editEventAction,
            },
        ],
    },
]);

// const queryClient = new QueryClient();

// we remove it from here and put it into http file because, when we create new event and submit it, it was not reloading by default
// so we have to tell the react query that data has changed so reload after the submiting the form
// sp that we have to first invalidate old query and then we it will fetch the data again and now it will bring new data

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
