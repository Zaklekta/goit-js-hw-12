'use strict';
export default function imagesTemplate(data) {
  return data.hits
    .map(el => {
      return ` <li class="gallery-item">
      <div class="thumb">
          <a class="gallery-link" href=${el.largeImageURL}>
            <img class="gallery-image" src=${el.webformatURL} alt=${el.tags} />
          </a>
</div>
          <ul class="stat-list">
            <li class="stat-elem">
              <p class="stat-elem-name">Likes</p>
              <p class="stat-elem-score">${el.likes}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Views</p>
              <p class="stat-elem-score">${el.views}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Comments</p>
              <p class="stat-elem-score">${el.comments}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Downloads</p>
              <p class="stat-elem-score">${el.downloads}</p>
            </li>
          </ul>
        </li>`;
    })
    .join('');
}
