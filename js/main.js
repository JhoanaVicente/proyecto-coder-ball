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
    }

    document.getElementById('result').innerHTML =
        "<div class='alert alert-sucess'>"
        + texto
        + "</div>";
}

function reset() {
    // copiar de nuevo los nombres originales a la lista que usamos en generate
}



function imagesPokemons() {
    let images = ["Cinthia.png", "Gabriela.png", "Halima.png"];
    let imagesLength = images.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber * imagesLength;
    randomNumber = Math.floor(randomNumber);
    let choosenImage = images[randomNumber];
    pokemons.src = choosenImage;
}
