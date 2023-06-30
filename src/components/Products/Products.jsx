import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    console.log("data",products);
    return (<>{ products !== undefined ? 
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products.map((item) => (
                    <Product 
                    key={item.productId} 
                    id={item.id} 
                    data={item} />
                ))};
            </div>
        </div>:''}
    </>
    );
};

export default Products;
