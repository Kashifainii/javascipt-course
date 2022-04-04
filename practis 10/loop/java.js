console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');
console.log('lifiting weight is heavy');


// loop exicute
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifiting weight is heavy😜 ${rep}`);


}
console.log('brake');
// loop itreation starts from 5 as we  want  and can 
for (let rep = 5; rep <= 10; rep++) {
    console.log(`lifiting weight is heavy😜 ${rep}`);

}
console.log('brake');
// loop itration increas
for (let rep = 1; rep <= 50; rep++) {
    console.log(`lifiting weight is heavy😜 ${rep}`);


}
//loop array 
const looparray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven']
]
for (let i = 0; i < 5; i++) {
    console.log(looparray[i]);
}
//print array like  this 
const loopArray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven'],

    true
];
for (let i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i], typeof loopArray[i]); // check the array lenght by using its property
}
const loopObject = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven'],

    true
];
for (let kashif = 0; kashif < loopObject.length; kashif++) {
    console.log(loopObject[kashif], typeof loopObject[kashif]);// check the name here replacemnt of (i)
}
const newArray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven'],

    true
];
const type = [];// to pass and made new empty araay to fecthe the typesof value of arrays a nd madw a nwe varalbe
for (let abdullah = 0; abdullah < newArray.length; abdullah++) {
    // reading the array from newarray
    console.log(newArray[abdullah], typeof newArray[abdullah]);// check the name here replacemnt of (i)

    // fiilling the array from newarray
    //type[abdullah] = typeof newArray[abdullah];
    type.push(typeof newArray[abdullah])
}

console.log(type);
// new practise on array
const years = [
    1991, 1992, 1993, 1994, 1995
];
const ages = []
for (i = 0; i < years.length; i++) {
    ages.push(2045 - years[i]);
}


console.log(ages);
// breaking and countinue the loop
const jhonArray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven']


]
console.log('.......... the string only.......');
for (let i = 0; i < jhonArray.length; i++) {
    if (typeof jhonArray[i] === 'string') continue;
    console.log(jhonArray[i], typeof jhonArray[i]);

}

//
const jhonnArray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven'],
    true

]
console.log('.......... breake with numbers.......');
for (let i = 0; i < jhonnArray.length; i++) {
    if (typeof jhonnArray[i] === 'number') break;
    console.log(jhonnArray[i], typeof jhonnArray[i]);

}

//loop backwords and loopp inside a loop
const jhenArray = [
    'kashif',
    'rasheed',
    2040 - 1992,
    'developers',

    ['friends', 'peeter', 'jhon', 'steven'],
    true


]
console.log('.......... breake with numbers.......');
for (let i = jhenArray.length - 1; i >= 0; i--) {

    console.log(i, jhenArray[i]);

}
for (job = 1; job < 4; job++) {
    console.log(`.......statting job.........${job}`);// this loop exicute  one time and then nessted complete itration and then main lop is working once and vise versa

    // we use the nested loop in our program to check specfice itration or value of a thing /.
    for (let rep = 1; rep < 10; rep++) {
        console.log(`lifiting weight is heavy😜 ${rep}`);

    }

}