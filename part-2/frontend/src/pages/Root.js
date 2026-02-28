import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    // this useNavigation used not in the page where we want to go but from where we are clicking button to goto that page 
    // and it is used to show the loading state and somthing before data arrive 
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state === "loading" && <p>Loading.. </p>}
                <Outlet />
            </main>
        </>
    );
}
