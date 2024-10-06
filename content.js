// content.js
console.log("Content script loaded on this page");

const productInfo = {
    name: document.querySelector('.product-grid-product-info__name h2')?.innerText || 'N/A',
    price: (() => {
        let prices = Array.from(document.querySelectorAll('.price-current__amount .money-amount__main'));
        return prices.map(price => price.innerText).join(', ') || 'N/A';
    })(),
    imageUrl: document.querySelector('.media__wrapper--media')?.src || ''
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getProductInfo') {
        sendResponse(productInfo);
    }
});
