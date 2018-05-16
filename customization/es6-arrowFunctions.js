function square(x){
    return x*x;
}
console.log("square value: "+square(6));

const square1 = function (x){
    return x*x;
}
console.log("square value: "+square1(7));

const squareArrow = (x) => {
    return x*x;
}
console.log("square value: "+squareArrow(8));

const squareArrow1 = (x)=>x*x;
console.log("square value: "+ squareArrow1(9));

// Assignment: create arrow function and return first from full name as parameter
// also use both regular and shorthand syntax of arrow function
const firstname = (fullname) => {
    return fullname.split(' ')[0];
};
console.log('First name: '+firstname('Crystal Paawn'));

const getfirstname = (fullname) => fullname.split(' ')[0];
console.log('First name: '+getfirstname('Crystal Paawn'));


