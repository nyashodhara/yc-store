import { useContext, useState } from "react";
import { Context } from "../../utils/Context";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import axios from 'axios';
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFetch(`/products/${id}`)
    const mobile = JSON.parse(localStorage.getItem("token"))?.data?.mobile;

    const addCart = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/product/add/cart', { mobile, quantity, id });
            if (response.data.status === "Success") {
                console.log("added to cart")
                setQuantity(1);
            }
            else {
                console.log("failed to add cart")
            }
        } catch (error) {
            console.error(error); // Handle error
            setQuantity(1);
        }
    }

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    }

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState == 1) return 1;
            return prevState - 1;
        });
    }

    return (
        <div> <Header />
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={data?.data?.images} alt="" />
                        </div>
                        <div className="right">
                            <span className="name">{data?.data?.name}</span>
                            <span className="price">{data?.data?.price}</span>
                            <span className="desc">{data?.data?.description}</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement}>-</span>
                                    <span >{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button className="add-to-cart-button" onClick={addCart}>
                                    <FaCartPlus size={20}  />
                                    ADD TO CART
                                </button>
                            </div>
                            <span className="divider"></span>
                            <div className="info-item">
                                <span className="text-bold">
                                    Category:
                                    <span>Headphone</span>
                                </span>
                                <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts
                        productId={id}
                        category={data?.data?.category}
                    />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default SingleProduct;
