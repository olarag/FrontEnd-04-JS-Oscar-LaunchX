const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            fnPokeImage("./img/404.gif");
            fnReset();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            fnPokeImage(pokeImg);
            let pokeNameForm = data.forms[0].name;
            fnPokeName(pokeNameForm);
            console.log(data.id);
            let pokeNumberForm = data.id;
            fnNumberForm(pokeNumberForm);
            let pokeTypeForm = data.types[0].type.name;
            fnTypeForm(pokeTypeForm);
            let pokeWeightForm = data.weight;
            fnWeightForm(pokeWeightForm);
            let pokeHeightForm = data.height;
            fnHeightForm(pokeHeightForm);
            let pokeAbilitiesForm = data.abilities;
            fnAbilitiesForm(pokeAbilitiesForm);
            let pokeStatsForm = data.stats;
            fnStatsForm(pokeStatsForm);
        }
    });
}

const fnPokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const fnPokeName = (name) => {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const elemento = document.getElementById("pokeNameForm");
    elemento.innerHTML = nameCapitalized;
}

const fnNumberForm = (name) => {
    const elemento = document.getElementById("pokeNumberForm");
    elemento.innerHTML = '#'+name;
}

const fnTypeForm = (name) => {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const elemento = document.getElementById("pokeTypeForm");
    elemento.innerHTML = nameCapitalized;
}

const fnWeightForm = (name) => {
    const elemento = document.getElementById("pokeWeightForm");
    elemento.innerHTML = name;
}

const fnHeightForm = (name) => {
    const elemento = document.getElementById("pokeHeightForm");
    elemento.innerHTML = name;
}

const fnAbilitiesForm = (name) => {
    let resultado = '';
    let i = 0;
    name.forEach(function (item, index) {
        abilities = item.ability.name;
        resultado = resultado.concat((!i ? "" : ", "), abilities);
        i++;    
      });
      console.log(resultado);
      const elemento = document.getElementById("pokeAbilitiesForm");
      elemento.innerHTML = resultado;
}

const fnStatsForm = (name) => {
    let resultado = '';
    let i = 0;
    name.forEach(function (item, index) {
        stats = item.base_stat + " - " +item.stat.name;
        resultado = resultado.concat((!i ? "" : "<br> "), stats);
        i++;    
      });
      console.log(resultado);
      const elemento = document.getElementById("pokeStatsForm");
      elemento.innerHTML = resultado;
}

const fnReset = (name) => {
    document.getElementById("pokeNameForm").innerHTML = "Inexistente";
    document.getElementById("pokeNumberForm").innerHTML = '?';
    document.getElementById("pokeTypeForm").innerHTML = '--';
    document.getElementById("pokeWeightForm").innerHTML = '--';
    document.getElementById("pokeHeightForm").innerHTML = '--';
    document.getElementById("pokeAbilitiesForm").innerHTML = '--';
    document.getElementById("pokeStatsForm").innerHTML = '--';
}

