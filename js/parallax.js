let goRight = document.querySelector('.slide-right')
let goLeft = document.querySelector('.slide-left')

let width = window.innerWidth


window.addEventListener('scroll', () => {
    const yPos = window.scrollY;

    if(yPos > 160) {
        goRight.style.left = yPos + "px";
        goLeft.style.right = yPos + "px";
    } else {
        goRight.style.left = 0;
        goLeft.style.right = 0;
        return;
    }
})

