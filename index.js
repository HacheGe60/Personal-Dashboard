const bodyEl = document.querySelector('body');
const authorEl = document.querySelector('#author');

async function getBackgroundImage() {
    const response = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sailboat');
    const data = await response.json();
    bodyEl.style.backgroundImage = `url(${data.urls.regular})`;
    authorEl.textContent = `By ${data.user.name}`;
}

getBackgroundImage();