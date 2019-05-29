const containerCounter = document.querySelector('span');
containerCounter.textContent = sessionStorage.getItem('currentDigit') || 0;

document.addEventListener('click', () => {
    const counter = (+containerCounter.textContent) + 1;
    containerCounter.textContent = counter;
    sessionStorage.setItem('currentDigit', counter);
});
