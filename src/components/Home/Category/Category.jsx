import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
    console.log(categories);
    return <> {categories != undefined ? <div className="shop-by-category">
        <div className="categories">
            {categories.map((item) =>(
                <div key={item.categoryId} className="category">
                <img src={item.image} alt='' />
            </div>
            ))}
        </div>
    </div> : ''}
    </>;
};

export default Category;
