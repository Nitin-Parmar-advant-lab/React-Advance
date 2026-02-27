import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        id: "p1",
        title: "Product 1",
    },
    {
        id: "p2",
        title: "Product 2",
    },
    {
        id: "p3",
        title: "Product 3",
    },
];

export default function ProductPage() {
    return (
        <>
            <h1>ths product page</h1>
            <ul>
                {PRODUCTS.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>Prodcut 1</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
