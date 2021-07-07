import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>
 class Car {
   constructor(name){
      this.brand = name;
   }
 }

const mycar = new Car("Audi");
ReactDOM.render(myfirstelement, document.getElementById('root'));