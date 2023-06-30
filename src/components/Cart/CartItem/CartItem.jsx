import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";


const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="image-container">
                    <img src={prod1} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>6</span>
                        <span>x</span>
                        <span>Rs 100</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
