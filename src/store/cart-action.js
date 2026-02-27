import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

// this is thunk
// it is function in which we make own action creater
// by default redux createthis action creater : { type: '', payload: ''}
// but in the thunk re creat function that return another function
// and this is not reducer note that, it is just js function and it is in this file because this file manages all the cart store realted things
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotifiction({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            }),
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-db-66a05-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to send cart data");
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiAction.showNotifiction({
                    status: "success",
                    title: "Success",
                    message: "Sending cart data successfully!",
                }),
            );
        } catch (error) {
            dispatch(
                uiAction.showNotifiction({
                    status: "error",
                    title: "Error",
                    message: "Sending cart data failed!",
                }),
            );
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-db-66a05-default-rtdb.firebaseio.com/cart.json",
            );

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartAction.rePlaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                }),
            );
        } catch (error) {
            dispatch(
                uiAction.showNotifiction({
                    status: "error",
                    title: "Error",
                    message: "Fetching cart data failed!",
                }),
            );
        }
    };
};
