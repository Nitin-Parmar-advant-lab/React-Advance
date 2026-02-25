import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextPrvoider } from "./store/UserProgressContext.jsx";
UserProgressContextPrvoider;

function App() {
    return (
        <UserProgressContextPrvoider>
            <CartContextProvider>
                <Header />
                <Meals />
                <Cart />
                <Checkout/>
            </CartContextProvider>
        </UserProgressContextPrvoider>
    );
}

export default App;
