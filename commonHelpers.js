import{a as f,i as n,S as h}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function y(r,e){f.defaults.baseURL="https://pixabay.com";const o=new URLSearchParams({key:"44429729-af770c699ef9a399bd7256131",q:r,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await f.get(`/api/?${o}`)).data}catch{iziToast.error(iziToastErrorObj)}}function b(r){return r.hits.map(e=>` <li class="gallery-item">
      <div class="thumb">
          <a class="gallery-link" href=${e.largeImageURL}>
            <img class="gallery-image" src=${e.webformatURL} alt=${e.tags} />
          </a>
</div>
          <ul class="stat-list">
            <li class="stat-elem">
              <p class="stat-elem-name">Likes</p>
              <p class="stat-elem-score">${e.likes}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Views</p>
              <p class="stat-elem-score">${e.views}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Comments</p>
              <p class="stat-elem-score">${e.comments}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Downloads</p>
              <p class="stat-elem-score">${e.downloads}</p>
            </li>
          </ul>
        </li>`).join("")}const C={title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},w={title:"",message:"You forgot to fill in the search field",backgroundColor:"rgb(255, 165, 0)",messageSize:"16",iconColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},L={title:"Error",message:"Sorry, something went wrong...",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},a={formElem:document.querySelector(".js-pixabay-form"),pixabayListElem:document.querySelector(".js-pixabay-galery"),loaderContainerElem:document.querySelector(".js-loader-container"),loadMoreBtnElem:document.querySelector(".load-more-btn")};let c="",i=1,g=1;const S=15;a.formElem.addEventListener("submit",async r=>{if(r.preventDefault(),u(),i=1,a.pixabayListElem.innerHTML="",c=r.target.elements.query.value.trim(),c!==""){p();try{const e=await y(c,i);if(g=Math.ceil(e.totalHits/S),e.hits.length===0)m(),n.error(C);else{const o=b(e);a.pixabayListElem.insertAdjacentHTML("afterbegin",o),new h(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),g!==i&&E()}}catch{n.error(L)}m()}else n.warning(w);r.target.reset()});a.loadMoreBtnElem.addEventListener("click",async()=>{i+=1,u(),p();try{const r=await y(c,i);p();const e=b(r);a.pixabayListElem.insertAdjacentHTML("beforeend",e),B(),new h(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),v(),m()}catch{n.error(L)}m()});function m(){a.loaderContainerElem.classList.add("hidden")}function p(){a.loaderContainerElem.classList.remove("hidden")}function E(){a.loadMoreBtnElem.classList.remove("hidden")}function u(){a.loadMoreBtnElem.classList.add("hidden")}function v(){i>=g?(u(),n.info({title:"The end!",message:"We're sorry, but you've reached the end of search results!"})):E()}function B(){const e=a.pixabayListElem.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
