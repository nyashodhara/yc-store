import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";


const CartItem = ({ data }) => {
    console.log(data);
    
    return (
        <div className="cart-products">
            {data?.data?.orderItems?.map((item) => (
            <div className="cart-product">
                <div className="image-container">
                    <img src={item?.productDto?.images} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item?.productDto?.name}</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>{item.itemCount}</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>{item.itemCount}</span>
                        <span>x</span>
                        <span>Rs {item.total}</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default CartItem;
