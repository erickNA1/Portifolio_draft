const texts = document.querySelectorAll('.fade-txt')

observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.opacity = '1';
        }
    })
})

texts.forEach(text => {
    observer.observe(text)
})