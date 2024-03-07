import{a as E,S as $,i as p}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const S=document.querySelector(".todo-list");function f(n){const o=n.map(({webformatURL:t,largeImageURL:r,tags:e,likes:s,views:a,comments:g,downloads:b})=>`<li class="photo-main-list">
          
            <a class="galery-link"  href="${r}">
            <img class="photo" width="360" height="200" src="${t}" alt="${e}" />
            </a>
            
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${s}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${a}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${g}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${b}</p>
                </li>
              </ul>
            </li>`).join("");S.insertAdjacentHTML("beforeend",o)}const w="42673645-b4144b7e03e5200cdf63068f8",L="https://pixabay.com/api/",x="photo",q="horizontal",I="true";async function h(n,o,t){try{const r=`${L}?key=${w}&q=${n}&image_type=${x}&orientation=${q}&safesearch=${I}&per_page=${o}&page=${t}`,e=await E.get(r);if(e.status!==200)throw new Error("Image is not found!!!");return e.data}catch(r){console.error("Error occurred while fetching new photos:",r)}}const c=document.querySelector(".todo-list"),y=document.querySelector(".input-text"),i=document.querySelector('[data-action="load-more"]'),O=document.querySelector(".main-form"),l=document.querySelector(".loader"),m=new $(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});let v,d=1;async function C(n){n.preventDefault(),c.innerHTML=null;const o=y.value.trim();try{const t=await h(o,15,1);if(t.hits.length===0)return c.innerHTML="",l.style.display="none",i.classList.add("is-hidden"),k();f(t.hits),m.refresh(),v=o,d=1,l.style.display="none",t.hits.length<15?(i.style.display="none",u()):i.style.display="block"}catch(t){console.error(t)}}O.addEventListener("submit",C);function A(n){n.preventDefault();let o=y.value;c.insertAdjacentElement("afterend",l),l.style.display="inline-block",d++,h(o,15,d).then(t=>{if(t.hits.length===0)return l.style.display="none",i.style.display="none",u();{f(t.hits),m.refresh(),l.style.display="none";const e=c.getBoundingClientRect();window.scrollBy(0,e.height*2),t.hits.length<15?(i.style.display="none",u()):i.style.display="block"}})}i.addEventListener("click",A);function k(){p.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}function u(){p.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
