//
// Created by FO on 18/03/2021

"use strict";

let targBtn = document.querySelector("header > span.login > button");
targBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    let loginBtn = new el(targBtn, "inline");
    let loginForm = new el(document.querySelector("header > span.login > form"), "none");

    //swap display
    swapDisplay(loginBtn, loginForm);
}, {passive: false, once: false, capture: false});