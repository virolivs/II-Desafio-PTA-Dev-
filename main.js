//definir constante identificar o personagem retornar por meio da class
const character = document.getElementsByClassName("character")[0];

//
const containerCharacter = document.getElementsByClassName("container-character")[0];

//definir constante para a velocidade do personagem
const VELOCITY = 10;

//
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

//declarar variável para a posição incial do personagem no eixo horizontal
let xPosition = 500;

//declarar variável para a posição inicial do personagem no eixo vertical
let yPosition = 300;

//declarar constante -- para um array contendo ..
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

//declarar constante para as direções tomadas pelo personagem para um array contendo comandos
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

//
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
