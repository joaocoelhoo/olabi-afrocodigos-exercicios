const prompt = require("prompt-sync")();

const username = prompt("Insira seu nome: ");
const levelAcess = prompt("Insira se você é Visitante, Funcionário, gerente ou administrador");
const time = parseInt(prompt("Insira o horário de acesso: "));

const openingTime = 8;
const closingTime = 22;
const visitTime = 9;
const visitClosingTime = 18;

let acessAllowed = false;
let message = "";

if (time >= openingTime && time <= closingTime) {
    if (levelAcess === "visitante" && time >= visitTime && time <= visitClosingTime) {
        acessAllowed = true;
    } else if (levelAcess !== "visitante") {
        acessAllowed = true;
    } else {
        message = "Visitantes só podem acessar entre 9h e 18h.";
    }
} else {
    message = "O prédio está fechado neste horário.";
}

if (acessAllowed) {
    message = `Olá, ${username}! Acesso permitido.`;
} else {
    message = `Olá, ${username}! Você não tem permissão para acessar o prédio. Motivo: ${message}`;
}

console.log(message);