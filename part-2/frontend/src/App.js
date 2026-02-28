import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetailsPage, {
    loader as eventDetailsLoader,
    action as eventDeleteAction,
} from "./pages/EventDetail";
import EventPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as changeEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
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
                        // this loader works veey well, when we click and ask server to give that page at time when click after that it send request and until it get resonse it wait and does not change the page
                        // so for watiing time we can show somthing to use for that we have hook called useNavigation
                        // you can see this in the root component
                        // (<RootLayout />) where it used
                        loader: eventsLoader,
                    },
                    // here we use this extra router for shared loader
                    {
                        path: ":id",
                        id: "evet-details",
                        loader: eventDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailsPage />,
                                action: eventDeleteAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: changeEventAction,
                            },
                        ],
                    },

                    // we use loader for load the data and action for taking the data
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: changeEventAction,
                    },
                ],
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
