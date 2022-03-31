/*const kashifArray = [
    'jonas',
    'jhon',
    'shoukat',
    2035 - 1992,
    'teachers',

    ['lahore ,krachi ,islamabad,multan, fiaslabad,']
];
// this is an objects and objects can b write in {} within brackest this is the easy way to right way to wright the objects.
const jonas = {
    firstnmae: 'jonas',
    lastNmae: 'jhon',
    middName: 'shoukat',
    age: 2035 - 1992,
    job: 'teachers',
    friends: ['lahore ,krachi ,islamabad,multan, fiaslabad,']
};*/
const jonas = {
    firstname: 'jonas',
    lastName: 'jhon',
    middName: 'shoukat',
    age: 2035 - 1992,
    job: 'teachers',
    friends: ['lahore', 'krachi', 'islamabad', 'multan', 'fiaslabad',]
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName'])
const nameKey = 'name';
console.log(jonas['firstname' + nameKey]);
console.log(jonas['lastName' + nameKey]);

const intersted = prompt('what do u know about jonas, chooce  beetween firstname, lastname, age,job and friends ');
console.log(intersted);
console.log(jonas[intersted]);
if (jonas[intersted]) {
    console.log([intersted]);
} else {
    console.log('wrong request,chooce  beetween firstname, lastname, age,job and friends ');
}
jonas.location = 'purtgal';
jonas['twiter'] = '@kashifrasheed'
console.log(jonas)
//coding challnge
// in a array has multiple friends and we chose best friend and total numver of friends in array:
console.log(`${jonas.firstname} has  ${jonas.friends.length}  fevrt city  but ${jonas.friends[3]} is the best city for the jonas babu`);