import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:8080"
             + url
        );
        return data;
    } catch (err) {
        return err;
    }
};