let pn1 = document.querySelector('.n1')
let pn2 = document.querySelector('.n2')
let pn3 = document.querySelector('.n3')
let pn4 = document.querySelector('.n4')

let pi1 = document.querySelector('.img1')
let pi2 = document.querySelector('.img2')
let pi3 = document.querySelector('.img3')
let pi4 = document.querySelector('.img4')

//project1
pn1.addEventListener('mouseenter', (e) => {
    pi1.style.opacity = '1';
    pi1.style.transform = 'translateX(0)';
});

pn1.addEventListener('mouseleave', (e) => {
    pi1.style.opacity = '0';
    pi1.style.transform = 'translateX(-100%)';
});

//project2
pn2.addEventListener('mouseenter', (e) => {
    pi2.style.opacity = '1';
    pi2.style.transform = 'translateX(0)';
});

pn2.addEventListener('mouseleave', (e) => {
    pi2.style.opacity = '0';
    pi2.style.transform = 'translateX(-100%)';
});

//project3
pn3.addEventListener('mouseenter', (e) => {
    pi3.style.opacity = '1';
    pi3.style.transform = 'translateX(0)';
});

pn3.addEventListener('mouseleave', (e) => {
    pi3.style.opacity = '0';
    pi3.style.transform = 'translateX(-100%)';
});

//project4
pn4.addEventListener('mouseenter', (e) => {
    pi4.style.opacity = '1';
    pi4.style.transform = 'translateX(0)';
});

pn4.addEventListener('mouseleave', (e) => {
    pi4.style.opacity = '0';
    pi4.style.transform = 'translateX(-100%)';
});