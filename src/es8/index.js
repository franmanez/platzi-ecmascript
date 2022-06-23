//es8 JUNIO 2017
//es8 Object.entries: devuelve los valores de una matriz. Transforma el objeto en matrix
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//es8 Object.values: devuelve SOLO los valores del objeto en una matriz.
const values = Object.values(data);
console.log(values);
console.log(values.length);

//es8 padding: añadir cadenas a un String hasta que llegas al valor máximo de la cadena (primer parámetro)
const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'-')) // Se añade al final la palabra 'hi'

//es8 detrailing comas
const obj = {
    name: 'Fran',
}


//es8 Async Await: asincronia
// https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World!'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
}

anotherFunction();