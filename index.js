import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    INR: 74.57
};
let useranswer = await inquirer.prompt([
    {
        name: "source", //source=from currency
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "INR"],
        message: "Enter Your Source Currency"
    },
    {
        name: "target", //target=To currency
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "INR"],
        message: "Enter Your Target Currency"
    },
    {
        name: "amount",
        type: "number",
        message: "Please Enter Your Amount"
    }
]);
//console.log(useranswer);
let sourceamount = currency[useranswer.source]; //we use(.) to get sourceamount from above three questions 
//i.e{source,target,amount}
//currency[for e.g USD]
let targetamount = currency[useranswer.target]; //this method is to get dynamic values
let amount = useranswer.amount;
let baseamount = amount / sourceamount;
//15000 / 280 (in pkr for e.g)
let convertedamount = baseamount * targetamount; //at this step we have onverted from/source amount into our baseamount amd 
//now we will convert into to/target amount
//console.log(sourceamount);             
//console.log(targetamount);
//console.log(amount);
console.log(convertedamount);
