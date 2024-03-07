import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:p})=>`<li class="photo-main-list">
          
            <a class="galery-link"  href="${r}">
            <img class="photo" width="360" height="200" src="${i}" alt="${s}" />
            </a>
            
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${e}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${t}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${n}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${p}</p>
                </li>
              </ul>
            </li>`).join("")}function y(o){const i=o.trim(),r=`${E}?key=${g}&q=${i}&image_type=${S}&orientation=${$}&safesearch=${b} `;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const g="42673645-b4144b7e03e5200cdf63068f8",E="https://pixabay.com/api/",S="photo",$="horizontal",b="true",l=document.querySelector(".todo-list"),c=document.querySelector(".input-text"),L=document.querySelector('[data-action="load-more"]'),q=document.querySelector(".main-form"),a=document.querySelector(".loader"),x=new f(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});a.style.display="none";let u=0;function d(o){o.preventDefault(),l.style.marginTop="60px",a.style.display="inline-block",o.target.elements.query.value.trim()&&(y(c.value).then(r=>{const s=r.hits.slice(u,u+15);if(s.length===0)return l.innerHTML="",I();l.innerHTML+=h(s),x.refresh(),loadedImagesCount+=15}).catch(r=>console.log(r)).finally(()=>{a.style.display="none",l.style.marginTop="20px"}),c.value="")}q.addEventListener("submit",d);function I(){m.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}L.addEventListener("click",o=>{d(o)});
//# sourceMappingURL=commonHelpers.js.map
