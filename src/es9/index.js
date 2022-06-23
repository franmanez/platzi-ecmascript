//es9 JUNIO 2018
//es9 operador de reposo: extraer propiedades de un objeto que aún no se ha construido
const obj = {
    'name': 'Fran',
    'age': 40,
    'country': 'Spain'
}

let{ name, ...all} = obj
console.log(name, all);

//este es el resultado: Fran { age: 40, country: 'Spain' }

//es9 propagación
const obj1 = {
    'name': 'Fran',
    'age': 40,
}

const obj2 = {
    ...obj1,
    'country': 'Spain'
}

console.log(obj2);

//es9 promise finally
const  helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hello World!');
        }else{
            reject('Ups!! Error')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Se ejecuta siempre cuando acaba!"));


//es9 mejoras de los regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);