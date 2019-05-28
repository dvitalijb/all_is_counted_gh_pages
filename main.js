const containerCounter = document.querySelector('span');
containerCounter.textContent = sessionStorage.getItem('currentDigit') || 0;

document.addEventListener('click', () => {
    containerCounter.textContent = (+containerCounter.textContent) + 1;
    sessionStorage.setItem('currentDigit', containerCounter.textContent);
})
