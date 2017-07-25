const moment = require("moment");
const chalk = require("chalk");

const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const day = moment().format("DDDo");
const seconds = Math.round((moment() - moment().startOf("day"))/1000)

// show today

console.log("It is " + chalk.blue(date) + ".");

// show day of year

console.log("It is the " + chalk.magenta(day) + " day of the year.");

// show seconds into day

console.log("It is " + chalk.cyan(seconds) + " seconds into the day.");

// is it daylight savings time?

function dst() {
  if (moment().isDST() === true) {
    return "It " + chalk.green("is") + " during Daylight Savings Time.";
  } else if (moment().isDST() === false){
    return "It " + chalk.green("is not") + " during Daylight Savings Time.";
  }
}

// is it a leap year?

console.log(dst(moment().isDST()));

function leap() {
  if (moment().isLeapYear() === true) {
    return "It " + chalk.red(is) + " not a leap year.";
  } else if (moment().isLeapYear() === false){
    return "It " + chalk.red("is not") + " not a leap year.";
  }
}

console.log(leap());
