import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-action";

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notifcation = useSelector((state) => state.ui.notification);
    console.log(showCart);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
        // in this case redux know well, that if dispatch is note passing any action then their must be action creater and then it will use it
        // mean if it is not like this: dispatch(uiAction.showNotifiction(xyz))
        // then their must be action creater, and we can create new action creater
        // this function will be exexcuted by redux and it also pass the dispatch so we can use that into own action creater
    }, [cart, dispatch]);

    return (
        <>
            {notifcation && (
                <Notification
                    status={notifcation.status}
                    title={notifcation.title}
                    message={notifcation.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
