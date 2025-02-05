let btns = document.querySelectorAll('.bubble');
let btnsTwo = document.querySelectorAll('.bubble-blue');

btns.forEach(item => {
    item.addEventListener('click', event => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle('flipped');
    });
});

btnsTwo.forEach(item => {
    item.addEventListener('click', event => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle('flipped');
    });
});