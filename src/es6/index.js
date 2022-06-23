//es6 JUNIO 2015
//es6: default params
function functionParamsES6(name = 'Fran', age = 40, country = 'Spain') {
    console.log(name, age, country);
};

functionParamsES6()
functionParamsES6('Ricardo', 23, 'CO')

//es6: template literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//es6 Multilínea
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin porttitor eget quam eu vehicula. Vestibulum tempus commodo lorem`;
console.log(lorem);

//es6 Desestructuración
let person = {
    'name': 'Fran',
    'age': 40,
    'country': 'Spain'
}
console.log(person.name, person.age);
let {name, age, country} = person;
console.log(name, age);

//es6 Spread Operator (operador de propagación) LET y CONST
let team1 = ['Fran', 'Oscar', 'Maria'];
let team2 = ['Ricardo', 'Camila', 'Rosa'];
let education = ['David', ...team1, ...team2];
console.log(education);

//es6 LET
//var crea variables disponibles de forma global
//let crea variables está disponible en el scope, en el bloque de código que va a ser llamado
{
    var globalVar = "Global Var"
}

{
    let globalLet =  "Global Let"
    console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet) no es accesible

//es6 CONST: establecer una variable constante. No cambia su valor
const a = 'b';
console.log(a);

//es6: Parámetros en objetos
let name2 = 'Fran';
let age2 = 40;
let obj = {name:name2, age:age2}; //es5
let obj2 = {name2, age2}; //es6
console.log(obj2);

//es6: Arrows Functions (this no vinculable, sintaxis más reducida, funciones anonimas)
const names = [
    {name: 'Fran', age: 40},
    {name: 'Luc', age: 32}
]

//es5
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    console.log(name);
}
const listOfNames4 = name => {
    console.log(name);
}

const square = num => num * num;

//es6: Promesas (trabaja el asincronismo)
const  helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('OK');
        }else{
            reject('Ups!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//es6 Clases

class calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(3,4));

//es6 Módulos y Generadores
//import { hello } from './module.js';
//hello();

//es6 Generator: funcion especial que retorna una serie de valores según el algoritmo escogido
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


