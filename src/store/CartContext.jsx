import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const exisintCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id,
        );

        const updatedItems = [...state.items];

        if (exisintCartItemIndex > -1) {
            const existingItem = state.items[exisintCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[exisintCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === "REMOVE_ITEM") {
        const exisintCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id,
        );
        const existingCartItem = state.items[exisintCartItemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(exisintCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[exisintCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === "CLEAR_CART") {
        return { ...state, items: [] };
    }

    return state;
}

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id });
    }

    function clearCart() {
        dispatchCartAction({ type: "CLEAR_CART" });
    }

    const cartContextValue = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart,
    };

    console.log(cartContextValue);

    return <CartContext value={cartContextValue}>{children}</CartContext>;
}
