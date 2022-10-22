//Scroll Animation For Home Page//
window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".second-animation");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("second-animation-activated");
    }
    else {
        content1.classList.remove("second-animation-activated");
    }
});

window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".second-animation1");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("second-animation1-activated");
    }
    else {
        content1.classList.remove("second-animation1-activated");
    }
});

