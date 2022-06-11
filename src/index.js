// import ApiService from './js/api.js';

// const apiData = new ApiService();
// console.log(apiData)
import getData from './js/api';
import { onShowMyLibrary, onShowHome } from './js/header';
console.log(getData());

// Refs
const refs = {
  headerContainer: document.querySelector('.js-header-container'),
  nav: document.querySelector('.nav'),
  logo: document.querySelector('.js-logo'),
  homeBtn: document.querySelector('a[data-link="home"]'),
  myLibraryBtn: document.querySelector('a[data-link="library"]'),
  form: document.querySelector('.js-submit'),
  myLibraryBtns: document.querySelector('.js-librari-list'),
  watchedBtn: document.querySelector('.js-watched-btn'),
  queueBtn: document.querySelector('.js-queue-btn'),
};

const {
  headerContainer,
  nav,
  logo,
  homeBtn,
  myLibraryBtn,
  form,
  myLibraryBtns,
  watchedBtn,
  queueBtn,
} = refs;

let searchQuery = '';

// Listiners
logo.addEventListener('click', onLogoClick);
homeBtn.addEventListener('click', onHomeBtnClick);
myLibraryBtn.addEventListener('click', onMyLybraryBtnClick);
form.addEventListener('submit', onFormSubmit);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onLogoClick(e) {
  e.preventDefault();
  console.log('onLogoClick');
  onShowHome();
}

function onHomeBtnClick(e) {
  e.preventDefault();
  console.log('onHomeBtnClick');
  onShowHome();
}

function onMyLybraryBtnClick(e) {
  e.preventDefault();
  console.log('onMyLybraryBtnClick');
  onShowMyLibrary();
}

function onFormSubmit(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    alert('Not correct search key');
    return;
  }

  console.log('onFormSubmit');
  console.log(searchQuery);
}

function onWatchedBtnClick() {
  if (queueBtn.classList.contains('active-btn')) {
    queueBtn.classList.remove('active-btn');
  }
  watchedBtn.classList.add('active-btn');
}

function onQueueBtnClick() {
  if (watchedBtn.classList.contains('active-btn')) {
    watchedBtn.classList.remove('active-btn');
  }
  queueBtn.classList.add('active-btn');
}
