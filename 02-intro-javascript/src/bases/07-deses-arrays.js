const nombres = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = nombres;

console.log(p1, p2, p3);

const retornarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

// Tarea
//  1. el primer valor del arr se llamará nombre
// 2. se llamara setNombre

const reactState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = reactState("goku");

console.log(nombre);
setNombre();
