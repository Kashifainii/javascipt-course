"coding challnge "
// as my own practise on condion
var bill = Number(prompt('please enter the bill'));
var tipp = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .20;
console.log(`the bill was  ${bill}, and tip was the ${tipp}, and total bill was the ${bill + tipp}`);


// as video demo  condition
var amount = Number(prompt('please enter the amount'));
var tax = amount <= 300 || amount < 50 ? amount * 15 / 100 : amount * 20 / 100;
console.log(`the amount was  ${amount}, and tax was the ${tax}, and total bill was the ${amount + tax}`);
document.write(`total bill with tip is ${bill + tipp} the amount with tax is ${amount + tax} `);