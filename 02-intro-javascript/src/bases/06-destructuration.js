// Destructuracion
// Asignacion Destructurales

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);

const retornarPersona = ({ nombre, edad, clave, rango = "Capitan" }) => {
  // console.log(nombre, edad, clave, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.231312,
      lng: 16.212121,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornarPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
