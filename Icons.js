'use strict';

const logo = document.getElementById('home-icon');
const uncc = document.getElementById('uncc-logo');
const title = document.getElementById('title');

logo.addEventListener('click', e =>{
    window.location.href = 'index.html';
});

title.addEventListener('click', e =>{
    window.location.href = 'index.html';
});

uncc.addEventListener('click', e =>{
    window.open('https://www.charlotte.edu/', '_blank');
});
