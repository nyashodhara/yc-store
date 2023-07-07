import Products from "../Products/Products";
import "./Category.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Category = () => {
    const location = useLocation();
    const { id } = useParams();
    const { data } = useFetch(`/products/category/${id}`);

    return (<> <Header />
        <div
            className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {location.state?.name}
                </div>
                <Products innerPage={true} products={data?.data} />
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>)
};

export default Category;
