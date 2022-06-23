//es12 JUNIO 2021
//es12 replaceAll
const string = "Javascript es maravilloso, con Javascript creo la web del futuro";
const replace = string.replaceAll("Javascript", "Java");
console.log(replace);

//es12 # = método privado
class Message{
    #show(val){
        console.log(val);
    };
    get #add(){
        //
    }
}
const message = new Message();
message.show("Hola Platzi!");

//es12: promise any: captura la respuesta de la primera que sea resuelta de forma satisfactoria
const promise1 = new Promise(((resolve, reject) => reject("reject 1")));
const promise2 = new Promise(((resolve, reject) => resolve("resolve 2")));
const promise3 = new Promise(((resolve, reject) => resolve("resolve 3")));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//es12 referencia débil a un objeto para evitar que sea recogido por el garbage collector (no lo libera de la memoria)
class anyClass{
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

//es12 operaciones y operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);


