//es11 JUNIO 2020
//es11 dynamic import
/*const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});*/

//es11 bigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//es11 promise allSettled: a diferencia de all, este si que espera la respuesta de todas las promesas
const promise1 = new Promise(((resolve, reject) => reject("reject")));
const promise2 = new Promise(((resolve, reject) => resolve("resolve")));
const promise3 = new Promise(((resolve, reject) => resolve("resolve 1")));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//es11 global this:
//console.log(window);
console.log(globalThis);

//es11 operador null ??
//const foo = 'asd' ?? 'default';
//console.log(foo);

//es11 optional ?
const user = {};
console.log(user?.profile?.email);



