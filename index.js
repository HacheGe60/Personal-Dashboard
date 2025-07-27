const bodyEl = document.querySelector('body');

async function getBackgroundImage() {
    const response = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sailboat');
    const data = await response.json();
    bodyEl.style.backgroundImage = `url(${data.urls.regular})`;
    bodyEl.innerHTML = `<p class='author'>Photo by ${data.user.name}</p>`;
}

getBackgroundImage();