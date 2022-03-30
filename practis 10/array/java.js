const friend1 = 'kashif ';
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
console.log(ages);