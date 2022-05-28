<!-- PROJECT LOGO -->
<br />
<h1>   </h1>
<p align="center"> 
  <a href="https://github.com/HACKATONA-ES-2022/OsFieisDoMaza">
    <img src="https://user-images.githubusercontent.com/50385593/170811169-2671bb32-fc81-456b-a802-9bcb7045e8f2.png" alt="Logo" width="260" height="260">
  </a>

  <h3 align="center">Os Fiéis da Maza</h3>  
  
  <p align="center">
    Hackatona 2022 - Engenharia de Software
    <br />
    <a href="http://www.ages.pucrs.br/hackatona-es-2022/"><strong>● Visualizar Site da Hackatona ●</strong></a>
    <br />
    <br />
    <p align="justify">
     <strong>PROBLEMA.  </strong> Como tornar a internet um local mais saudável?
    <br />
    <br />
    <strong>TRILHA.  </strong> Saúde Mental
    <br />
    <br />
    <strong>SOLUÇÃO.  </strong> Plataforma onde voluntariamente psicólogos e psiquiatras podem se disponibilizar gratuitamente para realizar consultas online ou presencial para grupos de pessoas que não possuem condições financeiras. A plataforma será disponibilizada para escolas a fim de auxiliar familiares da comunidade a encontrarem ajuda profissional.
    </p>
  </p>
</p>


![Badge](https://img.shields.io/static/v1?label=typescript&message=language&color=blue&style=for-the-badge&logo=TYPESCRIPT)

<h1>   </h1>

# Sumário :page_with_curl:
- [Sumário :page_with_curl:](#sumário-page_with_curl)
- [Instalação :heavy_check_mark:](#instalação-heavy_check_mark)
- [Arquitetura :hammer:](#arquitetura-hammer)
    - [Diagrama de Componente](#diagrama-de-componente)
    - [Tecnologia Utilizada](#tecnologia-utilizada)
    - [Fluxo do usuário](#fluxo-do-usuário)
- [Mockups :pencil2:](#mockups-pencil2)
- [Telas Desenvolvidas :computer:](#telas-desenvolvidas-computer)
- [Requisitos :book:](#requisitos-book)
    - [User Stories](#user-stories)
    - [GitHub Project](#github-project)
- [Colaboradores :mortar_board:](#colaboradores-mortar_board)

# Instalação :heavy_check_mark:
Para realizar a isntalação e conseguir rodar o projeto localmente, basta você fazer o clone deste repositório:
```shell
git clone https://github.com/Hackatona-AGES-2022/OsFieisDoMaza.git
```
Entrar na pasta app/
```shell
cd app/
```
Rodar a instalação das dependências do projeto:
```shell
yarn install
```
Iniciar o projeto com o seguinte comando:
```shell
yarn start
```
Após realizar esse passo a passo, o projeto já está disponível para executar e pode ser acessado pelo link: https://localhost:3000


# Arquitetura :hammer:
### Diagrama de Fluxo
O Diagrama de fluxo tem como objetivo apresentar uma ideia geral da estruturação dos componentes macro da aplicação - no caso, as telas do sistema -, mostrando como estão dispostos e com quais outros componentes interagem.

![Diagrama em branco](https://user-images.githubusercontent.com/69119889/170842277-f906e896-2288-41c3-bcc6-37eed31f9ea1.jpeg)


### Tecnologia Utilizadas
<ul>
   <li>React</li>
   <li>Typescript</li>
   <li>Node</li>
   <li>MongoDB</li>
   <li>AWS Lambda</li> 
  <li>AWS Cognito</li>
   <li>ECS</li>
   <li>Docker</li>
   <li>AWS Amplify</li>
</ul>

### Fluxo do usuário
O fluxo de usuário é uma técnica que te permite mapear todo fluxo de telas do seu site ou aplicativo de forma simples. Essa técnica funciona bem para alinhar os caminhos e ações que o usuário pode fazer junto com os membros do time.

![sla](https://user-images.githubusercontent.com/69119889/170842299-bdab56b0-fa95-4195-a52c-20885481d8f5.jpeg)


# Mockups :pencil2:
Para o desenvolvimento dos mockups, foram usados artefatos disponibilizados pelo aplicativo [Figma](https://www.figma.com/), que permite o desenvolvimento fidedigno para apresentação do projeto ao stakeholder, e posteriormente, esses mockups servem para auxiliar os desenvolvedores no desenvolvimento do aplicativo.
<p align="center">
  <a href="https://github.com/HACKATONA-ES-2020/OsFieisDoMaza/blob/main/images/TelaHome-TelaInicial-1.PNG">
    <img src="images/TelaHome-TelaInicial-1.PNG" alt="Logo" width="377" height="353">
  </a>
  <a href="https://github.com/HACKATONA-ES-2020/OsFieisDoMaza/blob/main/images/CadastroUsuario-CadastroOrg-2.PNG">
    <img src="images/CadastroUsuario-CadastroOrg-2.PNG" alt="Logo" width="377" height="347">
  </a>
  <a href="https://github.com/HACKATONA-ES-2020/OsFieisDoMaza/blob/main/images/ListagemDoacao-HomeOrg-3.PNG">
    <img src="images/ListagemDoacao-HomeOrg-3.PNG" alt="Logo" width="349" height="343">
  </a>
  <a href="https://github.com/HACKATONA-ES-2020/OsFieisDoMaza/blob/main/images/DetalhesDoacao-CadastroDoacao-4.PNG">
    <img src="images/DetalhesDoacao-CadastroDoacao-4.PNG" alt="Logo" width="349" height="344">
  </a>  
  </a>
  <a href="https://github.com/HACKATONA-ES-2020/OsFieisDoMaza/blob/main/images/UsuarioGameficado-5.PNG">
    <img src="images/UsuarioGameficado-5.PNG" alt="Logo" width="171" height="345">
  </a>
</p>

# Requisitos :book:
### User Stories
|User Story|Descrição|Tamanho|
|---|---|---|
|US1| Eu, como profissional da saúde, gostaria de poder me cadastrar na plataforma.|P|
|US2| Eu, como profissional da saúde, gostaria de poder registrar meus horários de atendimento disponíveis.|P|
|US3| Eu, como profissional da saúde, gostaria de poder definir as regiões nas quais eu posso atender.|M|
|US4| Eu, como profissional da saúde, gostaria de poder escrever uma breve descrição sobre mim.|P|
|US5| Eu, como profissional da saúde, gostaria de poder visualizar os meus pacientes e seus respectivos dados.|M|
|US6| Eu, como instituição, gostaria de poder me cadastrar na plataforma.|P|
|US7| Eu, como instituição, gostaria de registrar possíveis alunos.|P|
|US8| Eu, como instituição, gostaria de visualizar os alunos registrados.|P|
|US9| Eu, como aluno, gostaria de poder me conectar na plataforma.|P|
|US10| Eu, como aluno, gostaria de poder visualizar os profissionais disponíveis.|M|
|US11| Eu, como aluno, gostaria de poder visualizar mais informações de um profissional específico.|M|
|US12| Eu, como aluno, gostaria de poder agendar um horário com o profissional escolhido.|M|
|US13| Eu, como aluno, gostaria de poder visualizar os meus horários marcados com o respectivo profissional.|M|

### GitHub Project
O GitHub Project foi utilizado para organizar as tarefas (issues) da equipe.

# Colaboradores :mortar_board:
<table>
  <tr>
    <td align="center"><a href="https://github.com/brun0-znx"><img src="https://avatars.githubusercontent.com/u/69119889?v=4" width="100px;" alt=""/><br /><sub><b>Bruno Chanan</b></sub></a><br /><a href="https://github.com/brun0-znx" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/FranciscoJLucca"><img src="https://avatars0.githubusercontent.com/u/48070476?v=4" width="100px;" alt=""/><br /><sub><b>Francisco João Lucca Neto</b></sub></a><br /><a href="https://github.com/FranciscoJLucca" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LucasSusin"><img src="https://avatars.githubusercontent.com/u/39033196?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Simon Susin</b></sub></a><br /><a href="https://github.com/LucasSusin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/henriquederlam"><img src="https://avatars.githubusercontent.com/u/101577014?v=4" width="100px;" alt=""/><br /><sub><b>Henrique Derlam</b></sub></a><br /><a href="https://github.com/henriquederlam" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kevinribas"><img src="https://avatars.githubusercontent.com/u/50385593?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Ribas</b></sub></a><br /><a href="https://github.com/kevinribas" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/loureqdsz"><img src="https://avatars.githubusercontent.com/u/48070657?s=400&u=4d80271644108cb653e48e7f4280ea46125740d1&v=4" width="100px;" alt=""/><br /><sub><b>Lourenço Souza</b></sub></a><br /><a href="https://github.com/loureqdsz" title="Code">💻</a></td>
  </tr>
</table>
