var prompt = require('prompt-sync')();

const lista = []
let opcao;
do {
    opcao = prompt("Digite qual propriedade você quer ")
    lista.push(opcao)
} while(opcao !== 'sair');

console.log(lista.sort())