import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import EventDetailsPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import { loader as eventsLoader } from "./pages/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventPage />,
                        // this loader is very good thing, it will take function
                        // it execute that function before we reach that page, and also whatever we return it also give use availble to that page, so we can access those data
                        // we can write loader function here but for bettwe modularity main function is in the component folder where it used
                        loader: eventsLoader,
                    },
                    { path: ":id", element: <EventDetailsPage /> },
                    { path: "new", element: <NewEventPage /> },
                    { path: ":id/edit", element: <EditEventPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
