import axios from "axios";

export const baseURL = "https://coinranking1.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get ((url),{
        headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': '69335bc85bmsh4a455da4258a346p1a21f3jsnddad7980fceb'
          }

    })
    return data;
}