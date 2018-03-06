import React from 'react';
import ReactDom from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import"normalize.css/normalize.css";
import './styles/styles.scss';

ReactDom.render(<IndecisionApp />, document.getElementById('app'));





// class OldSyntax{
//   constructor(){
//     this.name = 'mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting(){
//     return `Hi. My name is ${this.name}.`;
//   }
// }

// import validator from 'validator';
//
// console.log(validator.isEmail(''));
// //import './utils.js';
// import subtract, { square, add } from  './utils.js';
// // import {isAdult, canDrink} from './person.js';
// console.log('appjs is running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));
// // console.log(isAdult(22));
// // console.log(canDrink(20));
