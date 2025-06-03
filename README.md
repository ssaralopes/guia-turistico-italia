# Guia Turístico: Itália

Este é um aplicativo mobile desenvolvido em **React Native**, utilizando a biblioteca **React Navigation (Stack Navigator)**.

O objetivo do projeto é simular um **Guia Turístico estático**, permitindo ao usuário navegar por informações sobre **Pontos Históricos**, **Restaurantes Recomendados** e **Atividades ao Ar Livre** na **Itália**.

> 🏛️🍝🌳 Uma experiência de navegação simples, intuitiva e agradável, com foco na prática dos conceitos de navegação entre telas em React Native.

---

## 📜 Descrição da Proposta

> “Para um trabalho da faculdade, o desafio proposto foi desenvolver um aplicativo mobile utilizando React Native e React Navigation Stack.  
> A ideia seria criar um guia turístico (estático), com uma tela inicial e navegação para três telas de conteúdo, cada uma trazendo informações diferentes sobre pontos turísticos selecionados.”

Ao receber esse desafio, decidi que meu projeto seria uma **homenagem à Itália**, país que transcende o conceito de destino turístico e se firma como um verdadeiro **santuário da arte, da cultura, da história e da beleza atemporal**.

A proposta vai além de listar locais: é um convite a embarcar em uma **viagem mágica pela essência da Itália**, onde cada detalhe — seja uma praça, um prato típico ou um monumento — carrega consigo **séculos de tradição, estética e significado**.

O app reflete uma visão onde a Itália não é apenas um país, mas uma **experiência sensorial e emocional**, que respira história e exala beleza em cada esquina, como um **ritual contínuo de celebração à humanidade, à arquitetura, às artes e aos sabores**.

---

## 🎨 Design e Estilo

Este aplicativo foi concebido como uma verdadeira **peça de design temático**, onde tanto os **elementos visuais** quanto os **textuais** traduzem a riqueza estética e cultural da Itália.

A inspiração parte diretamente da estética **renascentista e clássica**, com referências à arquitetura, às pinturas, às esculturas e à história milenar italiana.

Cada escolha de cor, ícone e composição visual foi pensada para criar um ambiente que remete ao universo das **galerias de arte, dos palácios, dos museus a céu aberto e das praças que testemunham séculos de história viva.**

---

### 🎨🖼️ Elementos de Estilo

- **Paleta de Cores:** Tons terrosos, verde oliva, vinho, creme, dourado envelhecido e mármore — evocando as texturas das cidades históricas, dos vitrais e das obras de arte.
- **Tipografia:** Simples, porém elegante, remetendo à formalidade das inscrições clássicas e à sofisticação da tradição europeia. (Fontes personalizadas planejadas para uma versão futura).
- **Layout:** Limpo, organizado e pensado para oferecer uma experiência de leitura agradável, porém com traços que lembram molduras de quadros, colunas, filetes dourados ou mármores polidos.
- **Texto:** Uma narração poética, que não se limita a informar, mas convida o usuário a mergulhar em uma jornada sensorial pela Itália.

🏛️✨ **Tudo no app busca transmitir a monumentalidade, a imponência e o encanto quase ritualístico que é estar na Itália.**  
> Uma terra onde cada pedra conta uma história, cada receita é um legado, e cada olhar é preenchido por uma beleza que transcende o tempo. não foi possível implementar completamente os Elementos de Estilo nesta versão, devido ao prazo de entrega do trabalho.

---

## 🗺️ Funcionalidades e Requisitos

### 1️⃣ Tela Inicial — Menu Principal

- Tela que funciona como o menu principal do aplicativo.
- Exibe três opções de navegação:
  - 🏛️ Pontos Históricos 
  - 🍝 Restaurantes Recomendados
  - 🌳 Atividades ao Ar Livre
- Inclui imagens ou ícones representativos para cada categoria, tornando a interface mais visual e interativa.

### 2️⃣ Tela de Pontos Históricos

- Lista de pontos históricos da Itália.
- Cada item contém:
  - Nome do local.
  - Breve descrição ou curiosidade.
  - (Opcionalmente, imagens.)

### 3️⃣ Tela de Restaurantes Recomendados

- Lista de restaurantes recomendados, contendo:
  - Tipo de culinária.
  - Faixa de preço.
  - Descrição curta.

### 4️⃣ Tela de Atividades ao Ar Livre

- Lista de atividades como trilhas, praças, parques, feiras, praias ou eventos ao ar livre.
- Cada item apresenta:
  - Nome do local.
  - Breve descrição.
  - (Opcionalmente, imagens.)

---

## 🔗 Funcionalidades de Navegação

- Implementação do **Stack Navigator** do React Navigation, que permite:
  - Navegar entre a tela inicial e as telas de conteúdo.
  - Utilizar o botão **“voltar”** do cabeçalho ou gestos nativos do dispositivo (como deslizar para voltar).

---

## 📱 Tecnologias Utilizadas

- 🧠 React Native
- 🔗 React Navigation (Stack Navigator)
- 💻 JavaScript
- ⚙️ Node.js
- 🎨 Estilização com StyleSheet do React Native

---

## 🗂️ Estrutura do Projeto
```bash
📁 guia-turistico-italia
┣ 📁 src
┃ ┣ 📁 components → Telas principais do app
┃ ┗ 📁 img → Imagens, ícones e arquivos estáticos
┣ App.js → Arquivo principal
┗ README.md → Este documento
```
---

## 🔧 Como Executar

### 1️⃣ Clone este repositório:
```bash
git clone https://github.com/ssaralopes/guia-turistico-italia.git
```
### 2️⃣ Instale as dependências:
```bash
npm install  
# ou  
yarn
```
### 3️⃣ Execute no seu emulador ou dispositivo físico:
```bash
npx react-native run-android  
# ou  
npx react-native run-ios
```
## 📄 Observações
Este projeto foi desenvolvido com fins educacionais, como parte de um desafio acadêmico para prática de desenvolvimento mobile com React Native e navegação entre telas (Stack Navigator).

 > **Por limitações da plataforma de envio, o projeto foi disponibilizado via GitHub.**

---

💻 Desenvolvido por
Sara Lopes — Aluna do curso de Análise e Desenvolvimento de Sistemas

🔗 [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ssaralopes)

