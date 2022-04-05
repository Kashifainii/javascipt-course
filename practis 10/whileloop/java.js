for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifiting weight is heavy😜 ${rep}`);


};

let rep = 1

while (rep <= 10) {
    // console.log(`lifiting weight is heavy😜 ${rep}`);
    rep++
}
let dic = Math.trunc(Math.random() * 9) + 1;
// console.log(dic);

while (dic !== 9) {
    console.log(`roll a dic ${dic}`)
    dic = Math.trunc(Math.random() * 9) + 1;
    if (dic === 9) console.log('loop is abiut to end')
}
//coding challage
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const billArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = [];
const totals = [];
for (let i = 0; i < billArray.length; i++) {
    const tip = calcTip(billArray[i]);
    tips.push(tip);
    totals.push(tip + billArray[i]);
}
console.log(billArray, tips, totals);




const calcAvrag = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.len, 7gth; i++) {
        //sum = sum + arr[i];
        sum += arr[i];

    }
    console.log(sum);
    return sum / arr.length
}
console.log(calcAvrag([2, 3]));
console.log(calcAvrag(totals));
console.log(calcAvrag(tips));