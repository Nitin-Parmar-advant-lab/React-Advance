import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent.js";
import MainNavigation from "../components/MainNavigation.js";

export default function Error() {
    const error = useRouteError();

    // in this we are setting error based on status code and that can be achive by this useRouterError hook

    // Default one
    let title = "An error occurred!";
    let message = "Something went wrong!";

    if (error.status === 500) {
        // message = JSON.parse(error.data).message;
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resourse or page.";
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}
