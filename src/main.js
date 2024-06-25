import getPictures from './js/pixabay-api';
import imagesTemplate from './js/render-functions';
import iziToast from 'izitoast';
import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { iziToastUnsuccessObj } from './js/iziToast-settings';
import { iziToastWarnObj } from './js/iziToast-settings';
import { iziToastErrorObj } from './js/iziToast-settings';

const refs = {
  formElem: document.querySelector('.js-pixabay-form'),
  pixabayListElem: document.querySelector('.js-pixabay-galery'),
  loaderContainerElem: document.querySelector('.js-loader-container'),
  loadMoreBtnElem: document.querySelector('.load-more-btn'),
};

let searchQuery = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMoreBtn();
  refs.pixabayListElem.innerHTML = '';
  searchQuery = e.target.elements.query.value.trim();
  if (searchQuery !== '') {
    showLoader();
    try {
      const data = await getPictures(searchQuery, currentPage);
      maxPage = Math.ceil(data.totalHits / perPage);
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error(iziToastUnsuccessObj);
      } else {
        const markup = imagesTemplate(data);
        refs.pixabayListElem.insertAdjacentHTML('afterbegin', markup);
        let gallery = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        gallery.refresh();
        showLoadMoreBtn();
      }
    } catch {
      err => {
        iziToast.error(iziToastErrorObj);
      };
    }
    hideLoader();
  } else {
    iziToast.warning(iziToastWarnObj);
  }
  e.target.reset();
});

refs.loadMoreBtnElem.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreBtn();
  showLoader();
  try {
    const data = await getPictures(searchQuery, currentPage);
    showLoader();
    const markup = imagesTemplate(data);
    refs.pixabayListElem.insertAdjacentHTML('beforeend', markup);
    scrollPage();
    let gallery = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    gallery.refresh();
    updateLoadMoreBtnStatus();
    hideLoader();
  } catch {
    err => {
      iziToast.error(iziToastErrorObj);
    };
  }
  hideLoader();
});

function hideLoader() {
  refs.loaderContainerElem.classList.add('hidden');
}
function showLoader() {
  refs.loaderContainerElem.classList.remove('hidden');
}

function showLoadMoreBtn() {
  refs.loadMoreBtnElem.classList.remove('hidden');
}
function hideLoadMoreBtn() {
  refs.loadMoreBtnElem.classList.add('hidden');
}
function updateLoadMoreBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMoreBtn();
    iziToast.info({
      title: 'The end!',
      message: `We're sorry, but you've reached the end of search results!`,
    });
  } else {
    showLoadMoreBtn();
  }
}

function scrollPage() {
  const liElem = refs.pixabayListElem.children[0];
  const height = liElem.getBoundingClientRect().height;
  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
