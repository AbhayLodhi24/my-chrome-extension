// popup.js
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getProductInfo' }, (response) => {
            if (response) {
                document.getElementById('product-name').querySelector('span').innerText = response.name;
                document.getElementById('product-price').querySelector('span').innerText = response.price;
                document.getElementById('product-image').src = response.imageUrl;
            } else {
                document.getElementById('product-info').innerText = 'No product info found';
            }
        });
    });
});
