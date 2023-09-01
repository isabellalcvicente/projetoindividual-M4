//Uma empresa de desenvolvimento de software precisa de uma ferramenta
//que vai receber uma lista de propriedades de CSS (ex: background-color,
//font-size, text-align) e vai devolvê-la ordenada de A-Z.
//Ordenar o CSS ajuda a encontrar a propriedade que precisa ser alterada
//mais rapidamente e essa ferramenta pode ser utilizada pualquer lista de palavras.
//Assim, você deve utilizara checar a
//ordenação de qar o Node para criar o código responsável por
//implementar essa ferramenta na linha de comando.

//O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a
//palavra “SAIR”. Quando isso acontecer, deve ser impressa no terminal a lista das
//propriedades ordenadas de A-Z uma em cada linha

const prompt = require('prompt-sync')();
//importando a biblioteca prompt 

const lista = []
//criando um array para armazenar as respostas do prompt
let opcao
//criando uma variavel unitaria que armazena a resposta do prompt (por tempo limitado)
do {
    opcao = prompt("Digite qual propriedade você quer ")
    lista.push(opcao)
} while(opcao !== 'sair');
//utilizando o do...while, pois a repetição deve ser realizada até o usuário digitar sair
//utilizei o do...while e não apenas o while, pois se utilizasse apenas o while ele teria que ser ativado, ou rodaria pela "metade"
console.log(lista.sort())
//ordena e mostra a lista