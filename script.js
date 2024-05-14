let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let moon = document.getElementById('moon');

let hill2 = document.getElementById('hill2');



window.addEventListener('scroll', () => { /*object that triggers a function every time the user scrolls.*/
    let value = window.scrollY;/*is calculated, which holds the current vertical scroll position (scrollY) of the window. This value increases as you scroll down the page.*/
/* were the elements move*/
    text.style.marginTop = value * 1 + 'px'
    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'
    hill5.style.left = value * 1.5 + 'px'
    hill4.style.left = value * -1.5 + 'px'
    hill1.style.top = value * 0.8 + 'px'
    moon.style.top = value * -1.5 + "px"
   
    hill2.style.left = value * -3.5 + 'px'

   
}
)

