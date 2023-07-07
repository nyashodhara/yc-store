import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data}) => {
    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={() => navigate("/product/"+id)}>
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
