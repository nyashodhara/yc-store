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
import prod1 from "../../assets/products/earbuds-prod-1.webp";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const SingleProduct = () => {
    return (
        <div> <Header />
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={prod1} alt="" />
                        </div>
                        <div className="right">
                            <span className="name">Name</span>
                            <span className="price">Price</span>
                            <span className="desc">earbud</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span>-</span>
                                    <span>5</span>
                                    <span>+</span>
                                </div>
                                <button className="add-to-cart-button">
                                    <FaCartPlus size={20} />
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
                    <RelatedProducts />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default SingleProduct;
