const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetail = document.querySelector('.weather-detail');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '0c124d8bef334dd4a9b1be123774263c';
    const city = document.querySelector('.search-box input').value;
    

    if(city === '')
        return;

    fe
})