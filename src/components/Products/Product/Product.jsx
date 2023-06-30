import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod1} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Realme Ear-Buds Q3 Neo</span>
                <span className="price">&#8377;100</span>
            </div>
        </div>
    );
};

export default Product;
