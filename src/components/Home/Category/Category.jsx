import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    return <div className="shop-by-category">
        <div className="categories">
            {categories?.map((item) =>(
                <div key={item.categoryId} className="category" onClick={() => navigate(`/category/${item.categoryId}`,{state: item})}>
                <img src={item.image} alt='' />
            </div>
            ))}
        </div>
    </div> 
};

export default Category;
