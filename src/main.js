import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './js/render-functions';
import getImages from "./js/pixabay-api";

const list = document.querySelector('.todo-list');
const searchInput = document.querySelector('.input-text');

const form = document.querySelector('.main-form');

const load = document.querySelector('.loader');

load.style.display = 'none';

function handler(event){
    event.preventDefault();
    list.style.marginTop = '60px';

    load.style.display = 'inline-block';

    getImages(searchInput.value)
    .then(data => {
        const images = data.hits;
        if(images.length === 0){
            list.innerHTML='';
            return handlerError();
        }else{
            list.innerHTML = createMarkup(images);
            const lightbox = new SimpleLightbox('.todo-list a.galery-link',{
                captionsData: 'alt',
                captionDelay: 500,
            });
            lightbox.refresh();
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