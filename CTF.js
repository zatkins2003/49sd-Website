'use strict';

const accordionItems = document.querySelectorAll('#accordion-container li:not(.q3)');

accordionItems.forEach(item => {
    const title = item.querySelector('p');
    const content = item.querySelector('.content');
    const arrow = item.querySelector('.arrow-icon');

    title.addEventListener('click', function (event) {
        const isOpen = item.classList.contains('open');

        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.content').style.maxHeight = 0;
                otherItem.querySelector('.arrow-icon').textContent = '►';
            }
        });
    

        item.classList.toggle('open', !isOpen);
        content.style.maxHeight = isOpen ? 0 : content.scrollHeight + 'px';
        arrow.textContent = isOpen ? '►' : '▼';
    });
});

const accordionItemsc3 = document.querySelectorAll('#accordion-container li .q3')

accordionItemsc3.forEach(item => {
    const title = item.querySelector('p');
    const content = item.querySelector('.content');
    const arrow = item.querySelector('.arrow-icon');

    title.addEventListener('click', function (event) {
        const isOpen = item.classList.contains('open');

        accordionItemsc3.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.content').style.maxHeight = 0;
                otherItem.querySelector('.arrow-icon').textContent = '►';
            }
        });
    

        item.classList.toggle('open', !isOpen);
        content.style.maxHeight = isOpen ? 0 : content.scrollHeight + 'px';
        arrow.textContent = isOpen ? '►' : '▼';
    });
});


const submitButton1 = document.getElementById('submitButton1');
const inputField1 = document.getElementById('q1ans');
const messageSpan1 = document.getElementById('message1');

submitButton1.addEventListener('click', function() {
    const inputValue = inputField1.value;
    if (inputValue === 'flag{sUmBit_tHIs}' ||
        inputValue === 'sUmBit_tHIs' ||
        inputValue === '<!-- flag{sUmBit_tHIs} -->' ||
        inputValue === '{sUmBit_tHIs}') {

        messageSpan1.textContent = 'Correct!';
        messageSpan1.style.color = 'green';
    } else {
        messageSpan1.textContent = 'Incorrect!';
        messageSpan1.style.color = 'red';
    }
});

const submitButton2 = document.getElementById('submitButton2');
const inputField2 = document.getElementById('q2ans');
const messageSpan2 = document.getElementById('message2');

submitButton2.addEventListener('click', function() {
    const inputValue = inputField2.value;
    if (inputValue === 'u_R_H@ck3r') {
        messageSpan2.textContent = 'Correct!';
        messageSpan2.style.color = 'green';
    } else {
        messageSpan2.textContent = 'Incorrect!';
        messageSpan2.style.color = 'red';
    }
});

const submitButton3_1 = document.getElementById('submitButton3.1');
const inputField3_1 = document.getElementById('q3.1ans');
const messageSpan3_1 = document.getElementById('message3.1');

submitButton3_1.addEventListener('click', function() {
    const inputValue = inputField3_1.value;
    if (inputValue === '10000') {
        messageSpan3_1.textContent = 'Correct!';
        messageSpan3_1.style.color = 'green';
    } else {
        messageSpan3_1.textContent = 'Incorrect!';
        messageSpan3_1.style.color = 'red';
    }
});

const submitButton3_2 = document.getElementById('submitButton3.2');
const inputField3_2 = document.getElementById('q3.2ans');
const messageSpan3_2 = document.getElementById('message3.2');

submitButton3_2.addEventListener('click', function() {
    const inputValue = inputField3_2.value;
    if (inputValue === '1753') {
        messageSpan3_2.textContent = 'Correct!';
        messageSpan3_2.style.color = 'green';
    } else {
        messageSpan3_2.textContent = 'Incorrect!';
        messageSpan3_2.style.color = 'red';
    }
});

const submitButton3_3 = document.getElementById('submitButton3.3');
const inputField3_3 = document.getElementById('q3.3ans');
const messageSpan3_3 = document.getElementById('message3.3');

submitButton3_3.addEventListener('click', function() {
    const inputValue = inputField3_3.value;
    if (inputValue === '66.249.73.135') {
        messageSpan3_3.textContent = 'Correct!';
        messageSpan3_3.style.color = 'green';
    } else {
        messageSpan3_3.textContent = 'Incorrect!';
        messageSpan3_3.style.color = 'red';
    }
});

const submitButton3_4 = document.getElementById('submitButton3.4');
const inputField3_4 = document.getElementById('q3.4ans');
const messageSpan3_4 = document.getElementById('message3.4');

submitButton3_4.addEventListener('click', function() {
    const inputValue = inputField3_4.value;
    if (inputValue === '/favicon.ico') {
        messageSpan3_4.textContent = 'Correct!';
        messageSpan3_4.style.color = 'green';
    } else {
        messageSpan3_4.textContent = 'Incorrect!';
        messageSpan3_4.style.color = 'red';
    }
});

const submitButton3_5 = document.getElementById('submitButton3.5');
const inputField3_5 = document.getElementById('q3.5ans');
const messageSpan3_5 = document.getElementById('message3.5');

submitButton3_5.addEventListener('click', function() {
    const inputValue = inputField3_5.value;
    if (inputValue === '9126') {
        messageSpan3_5.textContent = 'Correct!';
        messageSpan3_5.style.color = 'green';
    } else {
        messageSpan3_5.textContent = 'Incorrect!';
        messageSpan3_5.style.color = 'red';
    }
});



const submitButton4 = document.getElementById('submitButton4');
const inputField4 = document.getElementById('q4ans');
const messageSpan4 = document.getElementById('message4');

submitButton4.addEventListener('click', function() {
    const inputValue = inputField4.value;
    if (inputValue === 'hello wor') {
        messageSpan4.textContent = 'Correct!';
        messageSpan4.style.color = 'green';
    } else {
        messageSpan4.textContent = 'Incorrect!';
        messageSpan4.style.color = 'red';
    }
});

const hintButton1 = document.getElementById('hintButton1');
const hint1 = document.getElementById('hint1');

hintButton1.addEventListener('click', function() {
    hint1.classList.toggle('hidden');
});

const hintButton2 = document.getElementById('hintButton2');
const hint2 = document.getElementById('hint2');

hintButton2.addEventListener('click', function() {
    hint2.classList.toggle('hidden');
});

const hintButton3_1 = document.getElementById('hintButton3.1');
const hint3_1 = document.getElementById('hint3.1');

hintButton3_1.addEventListener('click', function() {
    hint3_1.classList.toggle('hidden');
});

const hintButton3_2 = document.getElementById('hintButton3.2');
const hint3_2 = document.getElementById('hint3.2');

hintButton3_2.addEventListener('click', function() {
    hint3_2.classList.toggle('hidden');
});

const hintButton3_3 = document.getElementById('hintButton3.3');
const hint3_3 = document.getElementById('hint3.3');

hintButton3_3.addEventListener('click', function() {
    hint3_3.classList.toggle('hidden');
});

const hintButton3_4 = document.getElementById('hintButton3.4');
const hint3_4 = document.getElementById('hint3.4');

hintButton3_4.addEventListener('click', function() {
    hint3_4.classList.toggle('hidden');
});

const hintButton3_5 = document.getElementById('hintButton3.5');
const hint3_5 = document.getElementById('hint3.5');

hintButton3_5.addEventListener('click', function() {
    hint3_5.classList.toggle('hidden');
});


const hintButton4 = document.getElementById('hintButton4');
const hint4 = document.getElementById('hint4');

hintButton4.addEventListener('click', function() {
    hint4.classList.toggle('hidden');
});
