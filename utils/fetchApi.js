import axios from "axios";

export const baseURL = "https://coinranking1.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get ((url),{
        headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY
          }

    })
    return data;
}