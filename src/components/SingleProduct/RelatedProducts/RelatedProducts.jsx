import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ productId, category }) => {
    const { data } = useFetch(`/products/category/${category}`);
    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data?.data}/>
        </div>
    );
};

export default RelatedProducts;
