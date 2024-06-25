import{a as f,i as d,S as h}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();async function y(s,e){f.defaults.baseURL="https://pixabay.com";const o=new URLSearchParams({key:"44429729-af770c699ef9a399bd7256131",q:s,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await f.get(`/api/?${o}`)).data}catch(l){console.log(l)}}function b(s){return s.hits.map(e=>` <li class="gallery-item">
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
        </li>`).join("")}const E={title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},w={title:"",message:"You forgot to fill in the search field",backgroundColor:"rgb(255, 165, 0)",messageSize:"16",iconColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},r={formElem:document.querySelector(".js-pixabay-form"),pixabayListElem:document.querySelector(".js-pixabay-galery"),loaderContainerElem:document.querySelector(".js-loader-container"),loadMoreBtnElem:document.querySelector(".load-more-btn")};let i="",n=1,g=1;const C=15;r.formElem.addEventListener("submit",async s=>{if(s.preventDefault(),p(),r.pixabayListElem.innerHTML="",i=s.target.elements.query.value.trim(),console.log(i),i!==""){u();try{const e=await y(i,n);if(g=Math.ceil(e.totalHits/C),console.log(g),e.hits.length===0)c(),d.error(E);else{const o=b(e);r.pixabayListElem.insertAdjacentHTML("afterbegin",o),new h(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),L()}}catch{}c()}else d.warning(w);s.target.reset()});r.loadMoreBtnElem.addEventListener("click",async()=>{n+=1,p(),u();try{const s=await y(i,n);u();const e=b(s);r.pixabayListElem.insertAdjacentHTML("beforeend",e),M(),new h(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),v(),c()}catch{}c()});function c(){r.loaderContainerElem.classList.add("hidden")}function u(){r.loaderContainerElem.classList.remove("hidden")}function L(){r.loadMoreBtnElem.classList.remove("hidden")}function p(){r.loadMoreBtnElem.classList.add("hidden")}function v(){n>=g?(p(),d.info({title:"The end!",message:"We're sorry, but you've reached the end of search results!"})):L()}function M(){const e=r.pixabayListElem.children[0].getBoundingClientRect().height;console.log(e),scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
