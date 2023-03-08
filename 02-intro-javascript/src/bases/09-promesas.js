import { getHeroesById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroesById(1);
//     // console.log(heroe);
//     resolve(heroe);
//     reject("Esto es un Big error");
//   }, 1000);
// });

// promesa
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(promesa);

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      // console.log(heroe);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No hay un heroe con este ID");
      }
    }, 1000);
  });
};

getHeroesByIdAsync(1).then(console.log).catch(console.warn);
