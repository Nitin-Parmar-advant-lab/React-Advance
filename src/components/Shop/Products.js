import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const I_AM_DUMMY_PRODUCT = [
    {
        id: "p1",
        price: 25,
        title: "good name",
        description: "this is nice name",
    },
    {
        id: "p2",
        price: 5,
        title: "decent name",
        description: "this is avarage name",
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {I_AM_DUMMY_PRODUCT.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
