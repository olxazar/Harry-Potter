import { data } from "./data.js";

const main = document.querySelector(".main");

function printCards(cards) {
  cards.forEach((card) => {
    printCard(card);
  });
}
printCards(data);

function printCard(card) {
  const parent = document.createElement("div");
  parent.classList.add("card__date");
  main.append(parent);

  const divImg = document.createElement("div");
  divImg.classList.add("div__img");
  parent.append(divImg);

  const img = document.createElement("img");
  img.classList.add("date__img");
  img.src = card.image;
  divImg.append(img);

  const info = document.createElement("div");
  info.classList.add("info");
  parent.append(info);

  const name = document.createElement("h2");
  name.classList.add("person__name");
  name.textContent = card.name;
  info.append(name);

  const actor = document.createElement("p");
  actor.classList.add("actor");
  actor.textContent = `Actor: ${card.actor}`;
  info.append(actor);

  const gender = document.createElement("p");
  gender.classList.add("gender");
  gender.textContent = `Gender: ${card.gender}`;
  info.append(gender);

  const house = document.createElement("p");
  house.classList.add("house");
  house.textContent = `House: ${card.house}`;
  info.append(house);

  const wandCore = document.createElement("p");
  wandCore.classList.add("wandCore");
  wandCore.textContent = `Wand Core: ${card.wand.core}`;
  info.append(wandCore);

  const alive = document.createElement("p");
  alive.classList.add("alive");
  alive.textContent = `Alive: ${card.alive}`;
  info.append(alive);
}

let input = document.querySelector(".name__input");
input.addEventListener("input", (evt) => {
  let inputValue = evt.target.value.toLowerCase();
  let filteredCards = data.filter((card) => {
    return (
      card.name.toLowerCase().includes(inputValue) ||
      card.actor.toLowerCase().includes(inputValue)
    );
  });
  main.innerHTML = "";
  printCards(filteredCards);
});

let select = document.querySelector(".school__input");
select.addEventListener("change", (evt) => {
  let selectedValue = evt.target.value;
  let filteredCards = data.filter((card) => {
    return card.house === selectedValue;
  });
  main.innerHTML = "";
  printCards(filteredCards);
});
