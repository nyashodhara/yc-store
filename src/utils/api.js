import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get("https://ecom-be-production.up.railway.app"
             + url
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};