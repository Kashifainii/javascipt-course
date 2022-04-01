//object method and funtion of omethed and funtion
const jonas = {
    firstName: 'jonas',
    lastName: 'jhon',
    middName: 'shoukat',
    birthYear: 1991,
    job: 'teachers',
    friends: ['lahore', 'krachi', 'islamabad', 'multan', 'fiaslabad'],
    drivingLicense: true,
    // this is a fution expression and also a method becuase this is relate to object.
    // calAge: function (birthYear) {
    //     return 2040 - birthYear;
    // }
    calAge: function (birthYear) {
        // console.log(this);//in this way we can access to whole object.
        // in expalainly if we change the name of object this key word take auto object not mention to give the exact name of object
        return 2040 - this.birthYear;// i use this here to eccess many othe property of jonas object but he only return siglne value 
        // return this.birthYear, firstName, lastName, middName;
    },


    //this is the funtion declaration and this is not workig here 
    //function calAge(birthYear) {
    //  return 2040 - birthYear;
    // } 
};
// console.log(jonas.calAge(1991));
console.log(jonas.calAge());
console.log(jonas.calAge());
console.log(jonas.calAge()); console.log(jonas.calAge());
// console.log(jonas['calAge'](1991));
// this is funtion declaration and store value in varible
//const calAge = function (birthYear) {
//return 2040 - birthYear;
//} 