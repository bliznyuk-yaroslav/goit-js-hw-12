
export default function getImages(inputValue){
    const QUERY = inputValue.trim();
    const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH} `;
return fetch(LINK)
    .then(res =>{
    if(!res.ok){
        throw new Error(res.status);
    }
    return res.json();
})

} 
const KEY = '42673645-b4144b7e03e5200cdf63068f8';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'
const SAFESEARCH = 'true';