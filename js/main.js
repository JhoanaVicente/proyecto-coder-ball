let names = ["Telma", "Tatiana", "Irina S", "Jhoana", "Maribel", "Jezabel", "Irina G",
    "Minerva", "Nadia", "Silvana", "Pamela", "Javi", "Gabriela", "Manuel",
    "Halima", "Nelly", "Ikram", "Lola"];

let originalNames = ["Telma", "Tatiana", "Irina S", "Jhoana", "Maribel", "Jezabel", "Irina G",
    "Minerva", "Nadia", "Silvana", "Pamela", "Javi", "Gabriela", "Manuel",
    "Halima", "Nelly", "Ikram", "Lola"];


function generate() {
    let texto;
    if (names.length === 0) {
        texto = "Game Over!"
    } else {
        let randomNumber = Math.floor(Math.random() * names.length);
        texto = names[randomNumber];
        names.splice(randomNumber, 1);
        changePokemonImage(texto);
    }

    document.getElementById('result').innerHTML =
        "<div class='alert alert-sucess'>"
        + texto
        + "</div>";
}

function reset() {
    // copiar de nuevo los nombres originales a la lista que usamos en generate
}



function changePokemonImage(name) {
    let imageName = "./img/pokemon/"+name+".png";
    document.getElementById("pokemons").src = imageName;
}
