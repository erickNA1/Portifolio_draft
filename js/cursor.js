let mouseCursor = document.querySelector('.cursor')
let hoverLinks = document.querySelectorAll('.link')

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left =  e.pageX + "px";
}

hoverLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        mouseCursor.classList.add('cursor-grow')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow')
    })
})