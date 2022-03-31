/*const friend1 = 'kashif ';
const friend2 = 'shoukat ';
const friend3 = 'adeel ';
const friend4 = 'ayyaz ';
// in array we can write in one line.
const friend = ['kashif ', 'shoukat', 'adeel', 'ayyaz'];
console.log(friend);
document.write(friend);
const y = new Array(2020, 2021, 2022, 2023, 2024, 2025, 2020, 2021, 2022, 2023, 2024, 2025, 2020, 2021, 2022, 2023, 2024, 2025,);
console.log(y);
console.log(friend[0]);
console.log(friend.length);
console.log(friend[friend.length - 1]);
friend[2] = 'waqar ali';
console.log(friend);
const firstName = 'master';
const jonas = [firstName, 'abubaker', 2020 - 2010, 'micheal', friend];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthyear) {
    return 2040 - birthyear;

}
const year = [1980, 1990, 1995, 1998, 2000, 1999];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[2]);
const age3 = calcAge(year[3]);
const age4 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(year[1]), calcAge(year[2]), calcAge(year[3]), calcAge(year[year.length - 1])];
console.log(ages);*/
///arraye oprater 
//const friend = ['kashif ', 'shoukat', 'adeel', 'ayyaz'];
//friend.push('saqib');
//console.log(friend);
/*const friend = ['kashif ', 'shoukat', 'adeel', 'ayyaz'];
//friend.push('saqib');
friend.unshift('abdullah');//this method include index in fristly
friend.pop();// in this we remove last elemnet from array
friend.shift();

const popped = friend.pop();
const newlenth = friend.push('saqib');
console.log(friend.indexOf('shoukat'));
console.log(friend.indexOf('ejaz'));
console.log(friend.includes('saqib'));
console.log(friend.includes('ejaz'));
friend.push(23);
console.log(friend.includes(23));
console.log(friend);
console.log(newlenth);
console.log(popped);
if (friend.includes('saqib')) {
    console.log('you are friends of kashif')
}*/
// coding practise and challange
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
//const tipCalcu = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 020;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);