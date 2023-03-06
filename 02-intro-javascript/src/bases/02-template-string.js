const nombre = "Eloy";
const apellido = "Bonilla";

// let nombreCompleto = nombre + " " + apellido;
let nombreCompleto = `${nombre}
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`);

