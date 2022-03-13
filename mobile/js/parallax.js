let goRight = document.querySelector('.slide-right')
let goLeft = document.querySelector('.slide-left')

window.addEventListener('scroll', () => {
    const yPos = window.scrollY;
    console.log(yPos)
    if(yPos > 0) {
        goRight.style.left = yPos + "px";
        goLeft.style.right = yPos + "px";
    } else {
        goRight.style.left = 0;
        goLeft.style.right = 0;
        return;
    }
})