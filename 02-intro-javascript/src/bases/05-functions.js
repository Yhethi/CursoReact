const saludar = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => `Hola ${nombre}`;
const saludar3 = () => `Hola Mundo`;
const getUser = () => ({
  uid: "123ABC",
  nombre: "Eloy",
});

console.log(saludar("Vegeta"));
console.log(saludar2("Goku"));
console.log(saludar3());
console.log(getUser());

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC567",
//     username: nombre,
//   };
// }

// const usuarioActivo = getUsuarioActivo("Eloy");
// console.log(usuarioActivo);

// Resolviendo

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Eloy");
console.log(usuarioActivo);
