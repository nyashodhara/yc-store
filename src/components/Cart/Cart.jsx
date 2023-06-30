import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn"
                        onClick={() => setShowCart(false)}>
                        <MdClose />
                        <spn className="text">
                            Close
                        </spn>
                    </span>
                </div>

                {/*<div className="empty-cart">
                    <BsCartX />
                    <span>No Product in the Cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
    </div>*/}

                <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377;1234</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">checkout</button>
                    </div>
                </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
