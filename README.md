# ✊ Pedra, Papel e Tesoura com IA

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?logo=tensorflow&logoColor=white)
![Google](https://img.shields.io/badge/Teachable%20Machine-Google-4285F4?logo=google&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green)


Projeto de jogo Pedra, Papel e Tesoura utilizando:

- HTML
- CSS
- JavaScript
- TensorFlow.js
- Teachable Machine (Google)

## 📷 Como funciona

O jogador utiliza a webcam para mostrar um gesto (Pedra, Papel ou Tesoura).

O modelo treinado no Teachable Machine reconhece o gesto em tempo real e, ao clicar em "Jogar", o sistema:

- Captura a previsão atual
- Gera uma jogada aleatória do computador
- Atualiza o placar

---

## 🧠 Modelo de IA

O modelo foi treinado com três classes:

- Pedra
- Papel
- Tesoura

A predição utiliza média de múltiplos frames para aumentar a estabilidade do reconhecimento.

---

## 🚀 Como rodar o projeto

⚠️ Não abra o arquivo diretamente no navegador.

Use um servidor local:

### Opção 1 — Live Server (VS Code)
Clique com botão direito no `index.html` → "Open with Live Server"

### Opção 2 — Usando Node

```bash
npx serve
```

---

## 📦 Tecnologias utilizadas

- TensorFlow.js

- Teachable Machine Image Library

- JavaScript Vanilla

---

## 🎯 Melhorias futuras

- Contagem regressiva antes de jogar

- Melhorar dataset do modelo

- Interface mais interativa

- Deploy no GitHub Pages

---
## 📜 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

### Joseph Cavalcante