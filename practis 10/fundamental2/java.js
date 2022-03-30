/*function logger() {
    console.log("my name is kashif");


}
logger();
logger();
logger();
logger();

function processor(mango, bnana) {
    console.log(mango, bnana);
    const juice = `mango juice is good for health ${mango} and bnana shaik is also good ${bnana}.`;
    return juice;
}

let abc = processor(5, 8);

function drink(abc) {
    const straw = 'big';
    console.log(`I drink it with ${straw} ${abc}`)
};
//function declration
function calAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calAge1(1992);
console.log(age1)
console.log(calAge1(1992));
//funtion expresstion
const calAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const Age2 = calAge2(1992);
console.log(age1, Age2);*/
const cutPieces = function (fruits) {
    return fruits * 4
};
const fruitsProcesser = function (apple, mango) {
    const applePieces = cutPieces(apple);// in this  we calla funtion in ony funtion 
    const mangoPieces = cutPieces(mango);
    const juice = `juices with ${applePieces} and juices with ${mangoPieces}`;
    return juice;
};
console.log(fruitsProcesser(2, 8));
document.write('juice');