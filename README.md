
# 🛠️  Ferramenta de Ordenação de Propriedades CSS

Esta ferramenta foi desenvolvida para auxiliar na ordenação de propriedades de CSS, facilitando a identificação e localização de propriedades que você inserir em uma lista. Ela permite que você insira propriedades de CSS e, quando desejar finalizar, exibe a lista ordenada em ordem alfabética.

# O contexto do projeto é: 

Uma empresa de desenvolvimento de software precisa de uma ferramenta que vai receber uma lista de propriedades de CSS (ex: background-color font-size, text-align) e vai devolvê-la ordenada de A-Z.


# Esse projeto foi desenvolvido com a seguintes tecnologias:

- Node.js = https://nodejs.org/en/ (versão v20.5.1)
- prompt-sync = https://www.npmjs.com/package/prompt-sync


# Para você conseguir rodar 

*Precisa ter o Node.js instalado em seu sistema, se não tiver, instale*
 - [NodeJS - Download](https://nodejs.org/pt-br/download)

# Como utilizar o projeto
Siga as instruções abaixo para clonar o projeto, navegar até a pasta, instalar as dependências e executar a ferramenta.

1° Clone o projeto

Abra o terminal e execute o seguinte comando para clonar o projeto para o seu sistema local:
```bash
 git clone <URL_DO_REPO>

```
2°Navegue até a pasta do projeto clonado usando o comando cd no terminal:

```bash
  cd nome-da-pasta-do-projeto

```
3° Instalar Dependências:
Antes de executar a ferramenta, é necessário instalar as dependências. Execute o seguinte comando para instalar as dependências necessárias

```bash
  npm install
```
4°Executar a Ferramenta
Para executar a ferramenta, utilize o seguinte comando no terminal:

```bash
node nome-do-arquivo.js
```

# Usando o projeto

1° Insira propriedades de CSS uma por vez, pressionando Enter após cada inserção
2°Continue inserindo propriedades até desejar encerrar
3°Quando quiser finalizar, digite "sair" (sem aspas) e pressione Enter

Após inserir "sair", a ferramenta exibirá a lista ordenada das propriedades de CSS


#Exemplos de Respostas

Sucesso
```
(Pergunta) Digite qual propriedade você quer: (Resposta) background-color
(Pergunta) Digite qual propriedade você quer 
(Resposta) font-size
(Pergunta) Digite qual propriedade você quer 
(Resposta) text-align
(Pergunta) Digite qual propriedade você quer 
(Resposta) sair
(Lista:)
background-color
font-size
text-align

```

# Referências

Documentação do Node.js

Documentação da biblioteca Prompt-sync



