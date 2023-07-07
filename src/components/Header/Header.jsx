import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import axios from 'axios';
import Cart from "../Cart/Cart";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const mobile = JSON.parse(localStorage.getItem("token"))?.data?.mobile;
    const [data, setData] = useState();

    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/");
    };

    const openCart = () =>{
        setShowCart(true);
        showCartApi();
    };

    const showCartApi = async (e) => {
        try {
            const response = await axios.post('http://localhost:8080/order/cart', { mobile });
            if (response.data.status === "Success") {
                console.log("open cart")
                setData(response.data);
            }
            else {
                console.log("failed to open cart")
            }
        } catch (error) {
            console.error(error); // Handle error
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/home")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/home")}>
                        SlipKart
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={openCart}
                        >
                            <CgShoppingCart />
                            {<span>5</span>}
                        </span>
                        <button className="logout" onClick={() => logout()}>Logout</button> 
                    </div>
                </div>
            </header>
            {showCart && <Cart 
            setShowCart = {setShowCart}
            data = {data}
            />}
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </>
    );
};

export default Header;
