"use strict";

/**
 * @param first
 * @param second
 */
function swapDisplay(first, second) {
    //cache the display of the first element
    let tmp = first.display;

    //set the display of the first element to that of the second
    first.element.style.display = second.display;

    //set the display of the second element to cached one
    second.element.style.display = tmp;
}