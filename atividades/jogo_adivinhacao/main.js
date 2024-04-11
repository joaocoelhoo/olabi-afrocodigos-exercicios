//Desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.
// dica:pesquise como gerar um numero aleatório usando o Math
const prompt = require("prompt-sync")();

const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(100);
const number = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

let attempts = 0;
let guess = null;

do {
    guess = parseInt(prompt("Digite seu número:"));
    attempts++;

    if (guess < number){
        console.log("Está quente, digite um número maior!")
    } else if (guess > number) {
        console.log("Está frio, tente um número menor!")
    }
} while (guess !== number);

console.log(`Você precisou de ${attempts} tentativas para acertar o número ${number}! `)