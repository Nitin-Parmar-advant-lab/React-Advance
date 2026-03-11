import MainHeader from "../components/MainHeader.js";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}