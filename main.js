const tagSpan = document.querySelector('span');
tagSpan.textContent = sessionStorage.getItem('textSpan') || 0;
let textSpan = tagSpan.textContent;

function countClick() {
    return textSpan++;
}

let counter = function () {
    return countClick();
}
document.addEventListener('click', () => {
    const newTextSpan = counter();
    tagSpan.textContent = newTextSpan;
    sessionStorage.setItem('textSpan', newTextSpan);
})