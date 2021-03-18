//
// Created by FO on 18/03/2021

"use strict";

/**
 * @constructor for element
 * @param element
 * @param display
 * @returns {element}
 */
class el {
    constructor(element, display) {
        this.element = element;
        this.display = display;

    }
}

/**
 * @brief: represents all sorts of errors that may occur
 */
class CustomError {

    /**
     * @constructor: creates this Error, setting its number
     * @param  number: the number of this Error
     */
    constructor(number) {
        this.number = number;
        //set the Message of this Error
        this.setMessage(number);
    }

    /**
     * @brief: sets the message of this Error. This function maps the passed number to a message
     * @param number: the number
     */
    setMessage(number) {
        switch (number) {
            case 1:     //The concerned TimeStamp is not recognized
                this.message = "Unknown TimeUnit";
        }
    }

}

/**
 * @brief: creates a new HTML representation of Time
 */
class TimeMaker {
    /**
     *
     * @param defaultTimeUnit: string representing the unit of Time to use
     */
    constructor(defaultTimeUnit = "dd/mm/yyyy") {

        this.time = this.makeTime(defaultTimeUnit)
        this.defaultTimeUnit = defaultTimeUnit;
    }

    /**
     * @brief: creates time using the passed unit and setting the passed limit
     * @param unit: the unit of time to be used
     * @param maxDays
     * @param maxMonth
     * @param maxYear
     * @param minYear
     * @throws Error: when The Unit not recognized
     */
    makeTime(unit, maxDays = 31, maxMonth = 12, maxYear = 2021, minYear = 1905) {
        switch (unit) {
            case "dd/mm/yyyy":
                this.makeDMY(maxDays, maxMonth, maxYear, minYear);
                break;
            case "day":
            case "days":
                this.makeDays(maxDays);
                break;
            default:        //The Unit is not recognized
                throw new CustomError(1);
        }
    }

    /**
     * @brief: creates a HTML representation of Time with the format Day, Month and Year, with a span being the outermost element
     */
    makeDMY(day, month, maxYear, minYear) {
        //create the span
        let span = document.createElement("span");

        //append the representation of the Days
        span.appendChild(this.makeDays());

        //append the representation of the Months
        span.appendChild(this.makeMonths());

        //append the representation of the Years
        span.appendChild(this.makeYears());

        return span;
    }

    /**
     * @brief: creates a new HTMLElement that represents a collection of Days
     * @param limit: the maximum numbers of days
     * @returns {HTMLSpanElement};
     */
    makeDays(limit = 31) {
        let element = document.createElement("select");     //creates a new Select Element
        element.id = "day";
        let count = 0;      //the total number of days added so far

        while (++count <= limit) {
            let option = (document.createElement("option"));      //appends an Option Element to the Select
            option.appendChild(document.createTextNode(count.toString()));

            //append the option to the Select Element
            element.appendChild(option);
        }

        //create a new span to contain the labeled day
        let span = document.createElement("span");
        // span.appendChild(this.createLabel("day", "Day"));
        span.appendChild(element);

        return span;
    }

    /**
     * @brief: creates a new HTML Element that represents a collection of Months
     * @returns {HTMLSpanElement}
     */
    makeMonths() {
        let select = document.createElement("select");         //creates a new Select Element
        select.id = "month";
        let count = 0;      //the total number of months added so far

        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        months.forEach((month) => {
            //create a new option to represent a new Month
            let option = document.createElement("option");

            option.appendChild(document.createTextNode(month));

            //append the new option to the Select Element
            select.appendChild(option);
        });


        //create a span to contain the labeled collection of months
        let span = document.createElement("span");
        // span.appendChild(this.createLabel("month", "Month"));
        span.appendChild(select);

        return span;
    }

    /**
     * @brief: creates a new collection of years in accordance to the passed time-range
     * @param latestYear
     * @param earliestYear
     * @returns {HTMLSpanElement}
     */
    makeYears(latestYear = 2021, earliestYear = 1905) {
        //confirm the passed present year is greater the passed minimum year
        if (latestYear < earliestYear) {
            //swap their values
            let tmp = latestYear;
            latestYear = earliestYear;
            earliestYear = tmp;
        }

        //create a new Select HTML Element that represents the collection of years
        let select = document.createElement("select");
        select.id = "year";

        //append the appropriate range of years to the collection
        for (let year = latestYear; year >= earliestYear; year--) {
            //create a new option to represent a new year
            let option = document.createElement("option");

            //set the value of the year
            option.appendChild(document.createTextNode(year.toString()));
            select.appendChild(option);
        }

        let span = document.createElement("span")
        // span.appendChild(this.createLabel("year", "Year"));
        span.appendChild(select);
        return span;
    }

    /**
     * @brief: creates a new HTML Label for the passed HTML "id" attribute
     * @param id
     * @param text
     * @returns {HTMLLabelElement}
     */
    createLabel(id, text = "") {
        let label = document.createElement("label");
        label.setAttribute("for", id);

        //set the content of the label
        label.appendChild(document.createTextNode(text));
        return label;
    }
}
