import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";

// https://example.com/products

const router = createBrowserRouter([
    // absolute path
    // mean all path should start as it is started root page
    // mean in this root start with "/" so all has to start with "/"  
    // (if we remove the froward slash then it will be realtive to the root )
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <RootLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <ProductPage />},
            { path: "/products/:id", element: <ProductDetailPage />},
        ],
    },
    // relative path
    // it mean that child will start with like this:  "/root/product"
    // {
    //     path: "/root",
    //     errorElement: <ErrorPage/>,
    //     element: <RootLayout />,
    //     children: [
    //         { path: "", element: <HomePage /> },
    //         { path: "products", element: <ProductPage />},
    //         { path: "products/:id", element: <ProductDetailPage />},
    //     ],
    // },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
