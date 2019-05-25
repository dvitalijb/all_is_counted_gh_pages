const tagSpan = document.querySelector('span');
tagSpan.textContent = sessionStorage.getItem('textSpan') || 0;
let textSpan = tagSpan.textContent;

function countClick() {
    return textSpan++;
}

document.addEventListener('click', () => {
    const newTextSpan = countClick();
    tagSpan.textContent = newTextSpan;
    sessionStorage.setItem('textSpan', newTextSpan);
})
