import{a as p,i as d,S as f}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function h(a,e){p.defaults.baseURL="https://pixabay.com";const o=new URLSearchParams({key:"44429729-af770c699ef9a399bd7256131",q:a,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await p.get(`/api/?${o}`)).data}catch(l){console.log(l)}}function y(a){return a.hits.map(e=>` <li class="gallery-item">
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
        </li>`).join("")}const E={title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},w={title:"",message:"You forgot to fill in the search field",backgroundColor:"rgb(255, 165, 0)",messageSize:"16",iconColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},r={formElem:document.querySelector(".js-pixabay-form"),pixabayListElem:document.querySelector(".js-pixabay-galery"),loaderContainerElem:document.querySelector(".js-loader-container"),loadMoreBtnElem:document.querySelector(".load-more-btn")};let n="",i=1,b=1;const C=15;r.formElem.addEventListener("submit",async a=>{if(a.preventDefault(),g(),i=1,r.pixabayListElem.innerHTML="",n=a.target.elements.query.value.trim(),n!==""){u();try{const e=await h(n,i);if(b=Math.ceil(e.totalHits/C),e.hits.length===0)c(),d.error(E);else{const o=y(e);r.pixabayListElem.insertAdjacentHTML("afterbegin",o),new f(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),L()}}catch{}c()}else d.warning(w);a.target.reset()});r.loadMoreBtnElem.addEventListener("click",async()=>{i+=1,g(),u();try{const a=await h(n,i);u();const e=y(a);r.pixabayListElem.insertAdjacentHTML("beforeend",e),M(),new f(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh(),v(),c()}catch{}c()});function c(){r.loaderContainerElem.classList.add("hidden")}function u(){r.loaderContainerElem.classList.remove("hidden")}function L(){r.loadMoreBtnElem.classList.remove("hidden")}function g(){r.loadMoreBtnElem.classList.add("hidden")}function v(){i>=b?(g(),d.info({title:"The end!",message:"We're sorry, but you've reached the end of search results!"})):L()}function M(){const e=r.pixabayListElem.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
