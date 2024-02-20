const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})



const burger = document.querySelector('.burger')
const bur = document.querySelectorAll('.bur')
const b_g = document.querySelector('.bg')
const fa = document.querySelectorAll(".fab")


burger.addEventListener('click', ()=>{
    bur[0].classList.toggle("RL")
    bur[1].classList.toggle('RM')
    bur[2].classList.toggle('RR')
    b_g.classList.toggle('b-g')
    toggleStyle()
})

function toggleStyle(){
    for(var i = 0; i <= 2; i++){
        if(fa[i].style.opacity == 0){
            fa[i].style.opacity = 1
        }else{
            fa[i].style.opacity = 0
        }
    }
}

let dots = 4;
let sliderElem = document.querySelector(".slider");
let dotElems = sliderElem.querySelectorAll(".slider__dot");
let indicatorElem = sliderElem.querySelector(".slider__indicator");

Array.prototype.forEach.call(dotElems, dotElem => {
  dotElem.addEventListener("click", e => {
    let currentPos = parseInt(sliderElem.getAttribute("data-pos"));
    let newPos = parseInt(dotElem.getAttribute("data-pos"));

    let newDirection = newPos > currentPos ? "right" : "left";
    let currentDirection = newPos < currentPos ? "right" : "left";

    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator--${newDirection}`);
    sliderElem.setAttribute("data-pos", newPos);
  });
});
