import owners, { heroes } from "../data/heroes";

// console.log(owners);

export const getHeroesById = (id) => {
  return heroes.find((heroes) => heroes.id === id);
};

// const { id, name, owner } = getHeroesById(1);

console.log(getHeroesById(1));
console.log(owners);

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroes) => heroes.owner === owner);
};

// const { id: id1, name: name1, owner: owner1 } = getHeroesByOwner("Marvel");
// console.log(id1, name1, owner1);

// console.log(getHeroesByOwner("DC"));
