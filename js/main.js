let names = ["Telma", "Tatiana", "Irina S", "Jhoana", "Maribel", "Jezabel", "Irina G",
    "Minerva", "Nadia", "Cinthia", "Pamela", "Javi", "Gabriela", "Manuel",
    "Halima", "Nelly", "Ikram", "Lola"];

let originalNames = ["Telma", "Tatiana", "Irina S", "Jhoana", "Maribel", "Jezabel", "Irina G",
    "Minerva", "Nadia", "Cinthia", "Pamela", "Javi", "Gabriela", "Manuel",
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
    array = array2.slice()
    document.getElementById("btn-reset") = "";
}



function changePokemonImage(name) {
    let imageName = "./img/pokemon/"+name+".png";
    document.getElementById("pokemons").src = imageName;
}

const pokebola2 = document.getElementById('pokebola2');
const panel = document.getElementById('panel');
const btnGengar = document.getElementById('btn-gengar');
const btnPikachu = document.getElementById('btn-pikachu');
const containerPockebola2 = document.getElementById('pockebola2');

pokebola2.addEventListener('click',()=>{
    panel.classList.toggle('active');
})
btnGengar.addEventListener('click',()=>{
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema','oscuro');
})
btnPikachu.addEventListener('click',()=>{
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('tema','claro');
})

const guardarTema = ()=>{
    if(localStorage.getItem('tema') === 'oscuro'){
        document.boddy.classList.remove('ligth-mode');
        document.body.classList.add('dark-mode');
    }else if(localStorage.generate('tema') === 'claro'){
        document.boddy.classList.add('ligth-mode');
        document.body.classList.remove('dark-mode');
    }

}
guardarTema();

