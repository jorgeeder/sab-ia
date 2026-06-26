# SAB-IA 📱🤖

> Um assistente inteligente executado **100% localmente** em dispositivos móveis utilizando **React Native**, **Expo** e **ExecuTorch**, sem dependência de serviços de IA em nuvem.

![React Native](https://img.shields.io/badge/React%20Native-0.79-blue)
![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![ExecuTorch](https://img.shields.io/badge/ExecuTorch-On--Device-green)
![License](https://img.shields.io/badge/license-Acad%C3%AAmico-lightgrey)

---

# Informações Acadêmicas

| Informação | Descrição |
|------------|-----------|
| **Universidade** | Universidade Federal do Oeste do Pará (UFOPA) |
| **Disciplina** | PC010028 – Inteligência Artificial |
| **Docente** | Guilherme Augusto Barros Conde |
| **Discentes** | Jorge Eder Gomes dos Santos Junior <br> Daniel Silva do Nascimento |

---

# Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Modelo de IA](#modelo-de-ia)
- [Atendimento aos Requisitos da Disciplina](#atendimento-aos-requisitos-da-disciplina)
- [Resultados Obtidos](#resultados-obtidos)
- [Limitações](#limitações)
- [Trabalhos Futuros](#trabalhos-futuros)
- [Conclusão](#conclusão)

---

# Sobre o Projeto

O **SAB-IA** é uma aplicação mobile desenvolvida para demonstrar a utilização de **Modelos de Linguagem (LLMs)** executados diretamente em dispositivos móveis (**On-Device AI**).

A aplicação utiliza a biblioteca **react-native-executorch** para realizar a inferência local do modelo **Llama 3.2 1B SpinQuant**, permitindo que toda a geração de respostas ocorra no próprio dispositivo, sem a necessidade de conexão com servidores externos de Inteligência Artificial.

Como estudo de caso, o modelo foi configurado para atuar como um **tutor universitário especializado em Ciência da Computação**, auxiliando estudantes na resolução de dúvidas teóricas, programação, algoritmos, estruturas de dados e demais conteúdos da área.

O projeto foi desenvolvido como atividade prática da disciplina **Inteligência Artificial**, explorando conceitos modernos de IA Generativa aplicada a dispositivos móveis.

---

# Objetivos

## Objetivo Geral

Desenvolver uma aplicação mobile capaz de executar um modelo de Inteligência Artificial diretamente no dispositivo utilizando ExecuTorch.

## Objetivos Específicos

- Demonstrar o uso de IA On-Device.
- Integrar um LLM a uma aplicação React Native.
- Explorar a execução local de modelos generativos.
- Avaliar qualitativamente as respostas produzidas pelo modelo.
- Demonstrar uma aplicação prática da IA em ambiente mobile.

---

# Funcionalidades

- Conversa em linguagem natural.
- Execução local do modelo de IA.
- Histórico da conversa.
- Assistente especializado em Ciência da Computação.
- Configuração personalizada do comportamento do modelo (*System Prompt*).
- Interface simples e intuitiva.
- Processamento sem utilização de APIs de IA.

---

# Tecnologias Utilizadas

## Desenvolvimento

- React Native
- Expo
- TypeScript
- JavaScript

## Inteligência Artificial

- ExecuTorch
- react-native-executorch
- Llama 3.2 1B SpinQuant

## Plataformas

- Android
- iOS

---

# Arquitetura

```text
                Usuário
                   │
                   ▼
          Interface React Native
                   │
                   ▼
      react-native-executorch
                   │
                   ▼
      Llama 3.2 1B SpinQuant
                   │
                   ▼
          Resposta Gerada
```

Fluxo da aplicação:

1. Inicialização da interface.
2. Carregamento do modelo de IA.
3. Configuração do comportamento do assistente.
4. Recebimento da pergunta.
5. Inferência realizada localmente.
6. Exibição da resposta.

---

# Estrutura do Projeto

```text
.
├── App.tsx
├── index.tsx
├── styles.ts
└── package.json
```

| Arquivo | Descrição |
|----------|-----------|
| **App.tsx** | Interface principal e gerenciamento da conversa |
| **index.tsx** | Entrada da aplicação |
| **styles.ts** | Estilos da interface |
| **package.json** | Dependências e scripts |

---

# Requisitos

Antes de executar o projeto é necessário possuir:

- Node.js 18+
- npm ou Yarn
- Git
- Android Studio (Android)
- Xcode (macOS para iOS)
- Expo CLI (opcional)
- Expo Go ou Development Build

---

# Instalação

Clone o projeto:

```bash
git clone <url-do-repositório>
```

Entre na pasta:

```bash
cd sab-ia
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

# Execução

Antes de executar a aplicação nativamente, é necessário gerar os arquivos específicos das plataformas **Android** e **iOS** utilizando o Expo Prebuild.

## Gerar arquivos nativos

Execute:

```bash
npx expo prebuild
```

Esse comando cria automaticamente as pastas:

```text
android/
ios/
```

a partir das configurações definidas no arquivo:

```text
app.json
```

---

## Desenvolvimento

Para iniciar o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

---

## Android

Após gerar os arquivos nativos, execute:

```bash
npx expo run:android
```

O comando irá compilar a aplicação e instalar no dispositivo ou emulador Android conectado.

---

## iOS

Em ambiente macOS com Xcode instalado:

```bash
npx expo run:ios
```

O comando irá gerar a aplicação iOS e executar no simulador ou dispositivo conectado.

---

## Recriar arquivos nativos (opcional)

Caso ocorram alterações no `app.json`, plugins ou configurações nativas, utilize:

```bash
npx expo prebuild --clean
```

Esse comando remove os arquivos nativos existentes e gera uma nova estrutura atualizada.

---

## Utilizando o Expo Go

Após executar:

```bash
npx expo start
```

Será exibido um QR Code.

### Android

Abra o **Expo Go** e leia o QR Code.

### iOS

Abra a câmera do dispositivo ou o aplicativo **Expo Go**.

> **Importante**
>
> Como o projeto utiliza módulos nativos (**react-native-executorch**), algumas versões podem exigir um **Development Build**, não sendo compatíveis com o Expo Go.

---

# Modelo de IA

Modelo utilizado:

**Llama 3.2 1B SpinQuant**

O modelo é configurado através de um **System Prompt**, assumindo o papel de tutor universitário especializado em Ciência da Computação.

Ele é capaz de:

- explicar conceitos;
- resolver exercícios;
- gerar códigos;
- corrigir programas;
- auxiliar em algoritmos;
- responder em português brasileiro.

---

# Atendimento aos Requisitos da Disciplina

## Implementação

A aplicação atende ao requisito de implementação ao integrar um modelo de Inteligência Artificial diretamente em uma aplicação mobile.

A solução contempla:

- interface gráfica para interação com o usuário;
- execução local do modelo de IA;
- processamento de linguagem natural;
- histórico de conversas;
- especialização do modelo através de System Prompt.

O projeto enquadra-se na categoria **Modelo de IA integrado a uma aplicação mobile**, conforme previsto no plano da disciplina.

---

## Testes e Validação

Os testes foram realizados utilizando perguntas relacionadas à Ciência da Computação.

Foram avaliados:

- carregamento do modelo;
- funcionamento da interface;
- estabilidade da aplicação;
- qualidade das respostas;
- manutenção do contexto da conversa;
- tempo médio de resposta.

Como o projeto utiliza IA Generativa, adotou-se uma **avaliação qualitativa** das respostas considerando:

- clareza;
- coerência;
- precisão técnica;
- contextualização;
- presença de alucinações.

### Casos de teste

| Entrada | Resultado esperado |
|----------|--------------------|
| O que é uma árvore binária? | Explicação conceitual |
| Explique o algoritmo de Dijkstra | Descrição e exemplo |
| Faça um programa em C para calcular fatorial | Código comentado |
| O que é Big-O? | Explicação sobre complexidade |

---

# Resultados Obtidos

Os testes demonstraram que:

- o modelo respondeu corretamente à maioria das perguntas realizadas;
- manteve coerência durante a conversa;
- apresentou boa organização textual;
- produziu respostas didáticas e compatíveis com o System Prompt;
- apresentou desempenho satisfatório após o carregamento inicial.

---

# Limitações

- Carregamento inicial relativamente lento.
- Dependência do hardware do dispositivo.
- Modelo reduzido (1B parâmetros).
- Possibilidade de alucinações.
- Histórico não persistente.

---

# Trabalhos Futuros

- Persistência das conversas.
- Reconhecimento de voz.
- Síntese de voz.
- Integração com documentos (RAG).
- Suporte multimodal.
- Download dinâmico de modelos.
- Comparação entre diferentes LLMs.
- Otimizações de desempenho.

---

# Conclusão

O desenvolvimento do **SAB-IA** demonstrou a viabilidade da utilização de modelos de Inteligência Artificial executados diretamente em dispositivos móveis.

Os resultados obtidos evidenciam que soluções **On-Device AI** podem oferecer baixa latência, maior privacidade e independência de serviços externos, tornando-se uma alternativa promissora para aplicações móveis inteligentes.

Além de atender aos objetivos propostos pela disciplina, o projeto proporcionou experiência prática na integração entre **React Native**, **ExecuTorch** e **Modelos de Linguagem**, consolidando conhecimentos em Inteligência Artificial Generativa aplicada ao desenvolvimento mobile.

---

# Autores

**Jorge Eder Gomes dos Santos Junior**

**Daniel Silva do Nascimento**

Universidade Federal do Oeste do Pará (UFOPA)

Disciplina: **PC010028 – Inteligência Artificial**