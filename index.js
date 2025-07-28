/* BACKGROUND IMAGE AND AUTHOR */
const bodyEl = document.querySelector('body');
const authorEl = document.querySelector('#author');

/* CRYPTO DATA */
const cryptosEl = document.querySelector('#cryptos');

/* GET BACKGROUND IMAGE */
async function getBackgroundImage() {
    try {
        const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sailboat');
        const data = await res.json();
        bodyEl.style.backgroundImage = `url(${data.urls.regular})`;
        authorEl.textContent = `By ${data.user.name}`;
    } catch (error) {
        console.log('Failed to fetch image');
        bodyEl.style.backgroundImage = `url(./images/ivan-f-UH2AoKrvbcE-unsplash.jpg)`;
        authorEl.textContent = `By Ivan F`;
    };
}

getBackgroundImage();

/* GET CURRENT DATA ON A CRYPTOCURRENCY */
async function getCryptoData() {
    try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoins');
        if (!res.ok) {
            const statusText = res.statusText || "No description available";
            throw new Error(`Error ${res.status} - ${statusText}`);
        }
        const data = await res.json();
        cryptosEl.innerHTML = `
            <p class="crypto"><span class="crypto-image"><img src="${data.image.small}"></span> ${data.name}</p> `;
    } catch (error) {
        cryptosEl.innerHTML = `
            <p class="crypto">❌ ${error.message}</p>`;
    }

}

getCryptoData(); 