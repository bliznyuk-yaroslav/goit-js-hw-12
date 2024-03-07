import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './js/render-functions';
import getNewImages from "./js/pixabay-api";

const list = document.querySelector('.todo-list');
const searchInput = document.querySelector('.input-text');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

const form = document.querySelector('.main-form');

const load = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.todo-list a.galery-link',{
    captionsData: 'alt',
    captionDelay: 500,
});
let currentQuery;
let currentPage = 1;

async function handler(event){
    event.preventDefault();
    list.innerHTML = null;
    const query = searchInput.value.trim();
    try {
        const data = await getNewImages( query, 15, 1);
        if( data.hits.length === 0){
            list.innerHTML = '';
            load.style.display = 'none';
            loadMoreBtn.classList.add('is-hidden');
            return handlerError();
        }
        else{
            createMarkup(data.hits);
            lightbox.refresh();
            currentQuery = query;
            currentPage = 1
            load.style.display = 'none';
            if(data.hits.length < 15 ){
                loadMoreBtn.style.display = 'none';
                handlerErrorResult();
            }
            else{
                loadMoreBtn.style.display = 'block';
            }
        }
    }
    catch(error){
        console.error(error);
    }
}
    form.addEventListener('submit', handler);

    function loadImages(e) {
        e.preventDefault();
        let currentQuery = searchInput.value;
      
        list.insertAdjacentElement('afterend', load);
        load.style.display = 'inline-block';
        currentPage++;
      
        getNewImages(currentQuery, 15, currentPage).then(data => {
          if (data.hits.length === 0) {
            load.style.display = 'none';
            loadMoreBtn.style.display = 'none';
            return handlerErrorResult();
          } else {
            createMarkup(data.hits);
            lightbox.refresh();
            load.style.display = 'none';
            const boxFotos = list;
            const rect = boxFotos.getBoundingClientRect();
            window.scrollBy(0, rect.height * 2);
      
            if (data.hits.length < 15) {
              loadMoreBtn.style.display = 'none';
              handlerErrorResult();
            } else {
              loadMoreBtn.style.display = 'block';
            }
          }
        });
      }
      loadMoreBtn.addEventListener('click', loadImages);

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

function handlerErrorResult() {
    iziToast.error({
      maxWidth: '432px',
      messageSize: '16px',
      titleColor: ' #fafafb',
      messageColor: '#fff',
      message: "We're sorry, but you've reached the end of search results.",
      closeOnEscape: true,
      position: 'topRight',
      backgroundColor: '#ed6f7c',
    });
  }