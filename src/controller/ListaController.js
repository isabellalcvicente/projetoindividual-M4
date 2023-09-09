const lista = require("../model/listaModel.js");
const prompt = require('prompt-sync')();
//importando a biblioteca prompt 


class ListaController{
    static criarLista(){
        do {
            var opcao = prompt("Digite qual propriedade você quer ")
            //criando uma variavel unitaria que armazena a resposta do prompt (por tempo limitado)
            lista.push(opcao)
        } while(opcao !== 'sair');
        //utilizando o do...while, pois a repetição deve ser realizada até o usuário digitar sair
        //utilizei o do...while e não apenas o while, pois se utilizasse apenas o while ele teria que ser ativado, ou rodaria pela "metade"
    }

    static ordenarLista(lista){
        return lista.sort()
        //ordena a lista, retornando ela ordenada podemos usar em outro escopo
    }

    static imprimirLista(lista){
        lista.forEach(item => {
            //percorre o array lista, item é cada entrada
            console.log(item)
            //mostra a lista
        });
    }

}

module.exports=ListaController;