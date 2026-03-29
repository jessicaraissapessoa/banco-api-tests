# Banco API Tests

## 📌 Descrição
Este projeto consiste em uma automação de testes para uma API REST baseada no projeto:
https://github.com/juliodelimas/banco-api

Os testes foram desenvolvidos utilizando JavaScript e têm como objetivo exercitar a automação de testes de API.

---

## 🎯 Objetivo
Automatizar testes de API REST para validar:
- Status codes
- Estrutura de resposta
- Regras de negócio
- Fluxos positivos e negativos

---

## 🛠️ Stack utilizada
- Node.js
- JavaScript
- Mocha (framework de testes)
- Chai (assertions)
- Supertest (requisições HTTP)
- Mochawesome (relatórios)

---

## 📁 Estrutura do Projeto

```
banco-api-tests/
├── fixtures/           # Massa de dados para testes
├── helpers/            # Funções auxiliares
├── test/               # Testes automatizados
├── .gitignore
├── package.json
└── package-lock.json
```

---

## ⚙️ Configuração do ambiente

### 1. Clonar o repositório
```bash
git clone https://github.com/jessicaraissapessoa/banco-api-tests
cd banco-api-tests
```

### 2. Instalar dependências
```bash
npm install
```

---

## 🔐 Arquivo .env

Este arquivo deve ser criado manualmente na raiz do projeto.

### Exemplo:
```
BASE_URL=http://localhost:3000
```

> ⚠️ A variável BASE_URL deve apontar para a API que será testada.

---

## ▶️ Execução dos testes

```bash
npm test
```

---

## 📊 Relatórios

Este projeto utiliza o Mochawesome para geração de relatórios em HTML.

Após executar os testes, os relatórios serão gerados automaticamente.

---

## 🔗 Documentação das dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/visionmedia/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Node.js: https://nodejs.org/

---

## 👩‍💻 Autora
Jéssica Raissa
