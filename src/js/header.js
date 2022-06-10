export default headerRefs = {
    homeBtn: document.querySelector('a[data-link="home"]'),
    myLibraryBtn: document.querySelector('a[data-link="library"]'),
    libraryBottons: document.querySelector('.librari-list'),
}

const { homeBtn, myLibraryBtn, libraryBottons } = headerRefs;

// console.log('homeBtn: ', headerRefs.homeBtn);
// console.log('myLibraryBtn: ', headerRefs.myLibraryBtn);

class Header {
    refs = {
        homeBtn: document.querySelector('a[data-link="home"]'),
        myLibraryBtn: document.querySelector('a[data-link="library"]'),
        libraryBottons: document.querySelector('.librari-list'),
    }

    
} 