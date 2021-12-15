const form = document.querySelector('.form');
const urlInput = document.getElementById('url');
const urlTitleInput = document.getElementById('url-title');
const bookmarksContainer = document.querySelector('.bookmarks-container')

window.addEventListener('DOMContentLoaded', loadLocalStorage);
form.addEventListener('submit', addItem);
bookmarksContainer.addEventListener('click', removeItem);

// add Item to list
function addItem(e) {
    e.preventDefault();
    let url = urlInput.value;
    let title = urlTitleInput.value;
    showItem(url, title);
    
    // clear input fields after submit
    urlInput.value = '';
    urlTitleInput.value = '';

    addToLocalStorage(url, title);
}

// show item in the page
function showItem(url, title) {
    bookmarksContainer.innerHTML += `<div class="bookmark-item">
                                        <a href="${url}" class="bookmark-name" target="_blank">${title}</a>
                                        <button class="delete-btn">
                                            <span class="material-icons delete">remove_circle</span>
                                        </button>
                                    </div>`;
}

// remove item from list
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete?')) {
            var item = e.target.parentElement.parentElement;
            bookmarksContainer.removeChild(item);
            let hrefVal = e.target.parentElement.previousElementSibling.getAttribute('href');
            removeFromLocalStorage(hrefVal);
        }
    }
}

// load items from local storage
function loadLocalStorage() {
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        showItem(key, value);
        console.log(value);
    }
}

// add item to localStorage
function addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// remove item from localStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}