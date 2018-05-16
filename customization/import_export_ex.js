// install, import and use

// import './utils.js'; -->to import .js file
// import {square, add, minus, double} from './utils.js'
import double, {square, add, minus} from './utils.js'
import validator from 'validator'
import React from 'react'
import ReactDom from 'react-dom'

console.log(validator.isEmail('teet@email.com'));
console.log('running app.js!!!')
console.log(square(2));
console.log(add(4));
console.log(minus(4));
console.log(double(5));

const temp = <p>test app</p>
ReactDom.render(temp, document.getElementById("app"))
console.log(temp);