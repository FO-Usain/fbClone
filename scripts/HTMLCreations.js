//
// Created by FO on 18/03/2021

"use strict";

try {
    //create the Date option for the index signUp form
    let dob = document.querySelector("#dob");
    dob.id = "dob";
    let timeMaker = new TimeMaker("dd/mm/yyyy");
    dob.insertBefore(timeMaker.makeDMY(), dob.firstChild);

} catch(error) {        //CustomError thrown
    //log error
    console(`Error-${error.number}: ${error.message}`);
}
