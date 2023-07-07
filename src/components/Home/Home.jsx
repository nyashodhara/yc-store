import "./Home.scss";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    },[]);

    const getCategories = () => {
        fetchDataFromApi("/category/list").then((res)=>{
            setCategories(res.data);
        })
    }

    const getProducts = () => {
        fetchDataFromApi("/products/list").then((res)=>{
            setProducts(res.data);
        })
    }

    return (
        <div><Header />
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories = {categories}/>
                    <Products products={products} headingText="Popular Products" />
                    </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
};

export default Home;
