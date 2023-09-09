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

// CHAMA TODO MUNDO 

const ListaController = require("./controller/Listacontroller.js");
const lista = require("./model/listaModel.js"); 
//importa não esquecendo do .js

ListaController.criarLista()
//precisa colocar de onde ele é para instanciar, pq se não ele não sabe de onde puxar
const listaOrdenada = ListaController.ordenarLista(lista)
ListaController.imprimirLista(listaOrdenada)