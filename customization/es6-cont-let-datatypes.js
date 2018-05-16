// var type variables r redifinable, reassignable and not block level 
var title = 'var variable';
title = 'reassigning var'; //reassigning
var title = 'var redefining'; //redefing
console.log(title);

// let type variable r reassignable not redifinable and r block level
let titleLet = 'let variable';
titleLet = 'reassigning let'; //reassigning
// var titleLet = 'let redefining'; //redefing
console.log(titleLet);

// const type variables r not reasignable and r block level
const titleconst = 'const variable';
// titleconst = 'redefine var'; //reassigning
// var titleconst = 'var redefining'; //redefing
console.log(titleconst);

// function level variable. var, const and let r not access while they 
// defined in function, if you define them in globally they can accessable
function variable(){
    let functionvar = 'test function level';
    return functionvar;
}

// console.log(blockvar);

// block level variable. var can access while they 
// defined in block but let and const can't access while in block, 
// if you define them in globally they can accessable
if (true){
    let blockvar = 'test block level';
}

// console.log(blockvar);