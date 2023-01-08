#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const toDoList = [];
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let title = await chalkAnimation.rainbow(`|||     CURRENCY CONVERTER    |||`);
    await sleep();
    title.stop();
}
await welcome();
async function questions() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'from',
            choices: ["PKR", "GBP", "USD"],
            message: 'From',
        },
        {
            type: 'list',
            name: 'to',
            choices: ["PKR", "GBP", "USD"],
            message: 'To',
        },
        {
            type: 'number',
            name: 'amount',
            message: 'enter your amount',
        }
    ]);
    const { from, to, amount } = answers;
    if (from && to && amount) {
        let result = Convertion[from][to] * amount;
        console.log(`Your convertion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invalid inputs");
    }
}
questions();
