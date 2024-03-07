
import axios from 'axios';
const KEY = '42673645-b4144b7e03e5200cdf63068f8';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'
const SAFESEARCH = 'true';

export default async function getNewImages(query, amount, page){
    try{
        const LINK = `${BASE_URI}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${amount}&page=${page}`;
        const res = await axios.get(LINK);
        if(res.status !==200){
throw new Error('Image is not found!!!');
        }
        return res.data;
    } catch(error){
        console.error('Error occurred while fetching new photos:', error)
    }
}