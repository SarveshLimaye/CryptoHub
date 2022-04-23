import axios from "axios";

export const baseNewsURL = "https://bing-news-search1.p.rapidapi.com"

export const fetchNews = async (url) => {
    const {data} = await axios.get((url) , {
        headers:{
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY
        }
    })
    return data;
}