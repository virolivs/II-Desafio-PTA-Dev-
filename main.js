//definir constante identificar o personagem retornar por meio da class
const character = document.getElementsByClassName("character")[0];

//
const containerCharacter = document.getElementsByClassName("container-character")[0];

//definir constante para a velocidade do personagem
const VELOCITY = 10;

//definir o tamanho da página
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

//declarar variável para a posição incial do personagem no eixo horizontal
let xPosition = 500;

//declarar variável para a posição inicial do personagem no eixo vertical
let yPosition = 300;

//declarar constante para as setas de direção para um array contendo seus respectivos nomes
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

    //definir condição para utlizar a seta para cima
    if(key === "ArrowUp" && yPosition>0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    //definir condição para utlizar a seta para baixo
    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT - 100){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }
    
    //definir condição para utlizar a seta para a esquerda
    if(key === "ArrowLeft" && xPosition>0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }
    
    //definir condição para utlizar a seta para a direita
    if(key === "ArrowRight" && xPosition < SCREEN_WIDTH - 100){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
