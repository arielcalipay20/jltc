//Scroll Animation For About Page//
window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".third-animation");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("third-animation-activated");
    }
    else {
        content1.classList.remove("third-animation-activated");
    }
});

window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".third-animation1");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("third-animation1-activated");
    }
    else {
        content1.classList.remove("third-animation1-activated");
    }
});