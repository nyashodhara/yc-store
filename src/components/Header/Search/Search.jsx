import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";


const Search = ({ setSearchModal }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Type for search"
                />
                <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod1} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Name</span>
                            <span className="desc">desc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
