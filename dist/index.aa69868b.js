"use strict";
///////////////
// Animation //
///////////////
window.addEventListener("load", function() {
    let elements1 = document.getElementsByClassName("alpha1");
    for(let i = 0; i <= elements1.length; i++){
        elements1[i].addEventListener("animationend", function(e) {
            elements1[i].classList.remove("animated");
        });
        elements1[i].addEventListener("mouseover", function(e) {
            elements1[i].classList.add("animated");
        });
    }
});
window.addEventListener("load", function() {
    let elements2 = document.getElementsByClassName("alpha2");
    for(let i = 0; i <= elements2.length; i++){
        elements2[i].addEventListener("animationend", function(e) {
            elements2[i].classList.remove("animated");
        });
        elements2[i].addEventListener("mouseover", function(e) {
            elements2[i].classList.add("animated");
        });
    }
});

//# sourceMappingURL=index.aa69868b.js.map
