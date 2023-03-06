const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: "45",
  direccion: {
    ciudad: "New York",
    zip: 324234,
    lat: 14.3232,
    lng: 34.929292,
  },
};
console.log({ persona });
console.table({ persona });

// const persona2 = persona; //Nunca hacer esto porque asigna es la copia del espacio de memoria, si se cambia 1, se cambian los 2 si o si
const persona2 = { ...persona }; //Asi es como se hace
persona2.nombre = "Peter"; //Nice

console.log(persona);
console.log(persona2);
