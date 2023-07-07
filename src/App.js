import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Login from "./components/Onboard/Login/Login";
import AppContext from "./utils/Context";
import { Navigate } from "react-router-dom";
import Protect from "./hooks/Protect";

function App() {
    const token = localStorage.getItem("token");
    return (
        <BrowserRouter>
            <AppContext>
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/home" element={<Protect Cmp={Home} />} />
                    <Route path="/category/:id" element={<Protect Cmp={Category} />} />
                    <Route path="/product/:id" element={<Protect Cmp={SingleProduct} />} />
                    <Route path="*" element={token ? <Navigate to="/home" /> : <Navigate to="/home" />} />
                </Routes>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;