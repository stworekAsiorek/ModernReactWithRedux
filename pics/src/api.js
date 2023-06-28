import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization: "Client-ID GhnSGd-Q_ZjKsKtTb38M5HP_buYg2GhoqMaezL22CkU"
        },
        params: {
            query: term
        }
    });
    console.log(response);
    return response.data.results
}

export default searchImages;