import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './js/render-functions';
import getImages from "./js/pixabay-api";

const list = document.querySelector('.todo-list');
const searchInput = document.querySelector('.input-text');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

const form = document.querySelector('.main-form');

const load = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.todo-list a.galery-link',{
    captionsData: 'alt',
    captionDelay: 500,
});
load.style.display = 'none';
let current_page = 0;

function handler(event){
    event.preventDefault();
    list.style.marginTop = '60px';
    load.style.display = 'inline-block';
    const query = event.target.elements.query.value.trim();
    if (!query){
        return;
      }
    getImages(searchInput.value)
    .then(data => {
        const images = data.hits.slice(current_page, current_page + 15);
        if(images.length === 0){
            list.innerHTML='';
            return handlerError();
        }else{
            list.innerHTML += createMarkup(images);
            lightbox.refresh();
            loadedImagesCount += 15;
        }
    })
    .catch(error => console.log(error))
    .finally(() => {
        load.style.display = 'none';
        list.style.marginTop = '20px';
    });
    searchInput.value = '';
}
form.addEventListener('submit', handler);

function handlerError(){
    iziToast.error({
        maxWidth: '432px',
        messageSize: '16px',
        titleColor: ' #fafafb',
        messageColor: '#fff',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        closeOnEscape: true,
        position: 'topRight',
        backgroundColor: '#ed6f7c',
    });
}
loadMoreBtn.addEventListener('click', event =>{
handler(event);
})