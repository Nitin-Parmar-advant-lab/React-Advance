import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </>
    );
}

export default App;
