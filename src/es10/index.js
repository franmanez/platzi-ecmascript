//es10 JUNIO 2019

//es10 flat aplanar array
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array);
console.log(array.flat());
console.log(array.flat(2));

//es10 flat mapear cada elemento, pasarle una función y aplanarla según el resultado.
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

//es10 trimStart: elimina los espacios en blanco del principio de un String
let hello = '         Hello';
console.log(hello);
console.log(hello.trimStart());

//es10 trimEnd: elimina los espacios en blanco del final de un String
hello = 'Hello         ';
console.log(hello);
console.log(hello.trimEnd());

//es10 optional catch binding
/*try{

}catch (error){ //se puede no pasar este error
    error
}*/

//es10 fromEntries: contruir un objeto a partir de una array
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//es10 Symbol: ver que elemtos se encuentran dentro de Symbol
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);