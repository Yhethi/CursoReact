// const arreglo2 = new Array(1);
let arreglo2 = [];
const arreglo = [];

let num = 1;
arreglo.push(num++);
arreglo.push(num++);
arreglo.push(num++);
arreglo.push(num++);

console.log(arreglo);
// arreglo.push(num);
arreglo2 = [...arreglo, 5];

console.log(arreglo2);

const arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo3);
