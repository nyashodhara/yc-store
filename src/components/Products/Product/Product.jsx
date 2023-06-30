import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({ id, data}) => {
    console.log(data);
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={data.images} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.name}</span>
                <span className="name">{data.description}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
