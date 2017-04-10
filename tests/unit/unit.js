import {orderByName} from '../app/common.js';

let ar = [
  {name:'Xavier'},
  {name:'Alex'},
  {name:'Ben'},
]

ar.sort(orderByName);
console.log(ar);
