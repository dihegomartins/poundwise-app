# 💷 PoundWise

<p align="center">
  <img src="./mobile/assets/screenshot.png" width="300" title="PoundWise App">
</p>

**PoundWise** é uma calculadora financeira especializada para brasileiros que estão planejando ou vivendo em Londres. O app ajuda a converter custos de moradia e transporte (Oyster Caps) de forma rápida e precisa.


## 🏗️ Estrutura do Projeto (Monorepo)

O projeto agora é organizado de forma escalável para suportar tanto o aplicativo quanto o servidor:

- **`/mobile`**: O coração do app (React Native/Expo).
- **`/backend`**: API para conversão de moedas e serviços (Node.js/Express).


## 🚀 Funcionalidades (Roadmap)

- [x] **FEAT-01**: Conversão de Aluguel Semanal para Mensal.
- [x] **FEAT-02**: Interface Limpa e Campo de Limpeza Rápida.
- [x] **FEAT-03**: Calculadora de Transporte (TFL London Zones 1-4).
- [ ] **FEAT-04**: Conversor Consolidado BRL/GBP (Em desenvolvimento).

## 🛠️ Tecnologias Utilizadas

- **React Native** com **Expo** (SDK 52+).
- **TypeScript** para tipagem e segurança de código.
- **Expo Router** para navegação.
- **Node.js**: Estrutura de backend preparada para a API.

## 📱 Como Rodar o Projeto

### Aplicativo Mobile
1. Entre na pasta correspondente:
   ```bash
   cd mobile
2. Inicie o servidor do Expo:
   ```bash
   npx expo start

3. Escaneie o QR Code com o app Expo Go (Android) ou a câmera (iOS).

🧠 O que aprendi neste projeto
Este projeto foi focado em aplicar padrões de mercado (Clean Code), como:

Componentização: Divisão de UI para facilitar a manutenção.

UX Nativa: Uso de KeyboardAvoidingView e ScrollView para navegação fluida em dispositivos móveis.

Gestão de Constantes: Centralização de valores "mágicos" para facilitar atualizações futuras de preços da TFL.

Desenvolvido com ☕ e foco no mercado de Londres.
