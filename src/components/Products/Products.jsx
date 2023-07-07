import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return ( 
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.map((item) => (
                    <Product 
                    key={item.productId} 
                    id={item.productId} 
                    data={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;
