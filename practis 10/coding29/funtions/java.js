/*function sum(x = 10, y = 20) {

    document.write(x + y);
    console.log(x + y);
}
sum(50000, 100000);// in this way we can overwrite the value in funtions 
function form(fullname = "kasif", lastname = "rasheed") {
    var a = fullname + "-" + lastname;
    return a;

}
var fn = form('pakistan', 'zindabad');
document.write(fn);*/
/*function sum(math, eng, urdu) {
    var s = math + eng + urdu;
    return s;

}
function percentage(tt) {
    var per = tt / 300 * 100;

    document.write(per);
}

var total = sum(90, 90, 80);
percentage(total);*/
function ageCheck() {
    let age = Number(prompt('plz enter the age '));

    if (age == 25) {
        return document.write('kashif');
    }
    else if (age == 27) {
        return document.write('rashid');
    }
    else if (age == 22) {
        return document.write('khalid');
    }
    else {
        return alert('enter the age ');
    }

}

ageCheck();