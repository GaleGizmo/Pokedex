export function muestraPokemons(lista) {
    const ol = document.getElementById("pokedex");
    ol.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
      const card = document.createElement("li");
      const cardTitle = document.createElement("p");
      const cardSubtitle = document.createElement("span");
      const cardImage = document.createElement("img");
      const cardStats = document.createElement("div");
      card.className = "card";
      cardTitle.className = "card-title";
      cardSubtitle.className = "card-subtitle";
      cardImage.className = "card-image";
      cardStats.className = "card-stats";
      cardTitle.innerHTML = `${lista[i].name}`;
      cardSubtitle.innerHTML = `Ability: ${lista[i].ability}`;
      if (lista[i].ability === "compound-eyes") {
        cardSubtitle.style.fontSize = "14px";
      }
      cardImage.setAttribute("src", `${lista[i].image}`);
      cardStats.innerHTML = `<span class="card-stats__hp">HP: <span class="card-stats__data">${lista[i].hp}</span></span><span class="card-stats__att">ATT: <span class="card-stats__data">${lista[i].attack}</span></span><span class="card-stats__def">DEF:<span class="card-stats__data"> ${lista[i].defense}</span></span>`;
      ol.appendChild(card);
      card.appendChild(cardTitle);
      card.appendChild(cardSubtitle);
      card.appendChild(cardImage);
      card.appendChild(cardStats);
    }
  }