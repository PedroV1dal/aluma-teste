# Alume Teste - Reserva de Voos Espaciais

Este é um projeto de teste desenvolvido para a Alume, utilizando Next.js e bootstrapped com create-next-app. A aplicação permite que usuários reservem voos espaciais, preenchendo um formulário com informações pessoais e selecionando um voo futuro. Após a reserva, uma página de sucesso exibe detalhes do voo, informações técnicas e links relacionados.
Funcionalidades

- Formulário de Reserva: Permite ao usuário selecionar um voo, informar nome, idade e problemas de saúde.
- Página de Sucesso: Exibe informações do passageiro, detalhes do voo (nome, data, status), informações técnicas (foguete, launchpad, núcleo) e links relacionados (Reddit, Webcast, etc.).
- Responsividade: Layout adaptado para diferentes tamanhos de tela (mobile, tablet, desktop).
- Limpeza de Formulário: O formulário é reiniciado ao iniciar um novo cadastro.
- Modularidade: Componentes organizados em átomos, moléculas e organismos para melhor manutenção.

Tecnologias Utilizadas

- Next.js 14: Framework React para construção de aplicações web.
- TypeScript: Tipagem estática para maior segurança e manutenção.
- Tailwind CSS: Estilização rápida e responsiva.
- React Hook Form: Gerenciamento de formulários.
- Date-fns: Formatação de datas.
- Heroicons: Ícones para a interface.

Pré-requisitos

    Node.js: Versão 18 ou superior.
    Gerenciador de Pacotes: npm, yarn, pnpm ou bun.

Como Rodar o Projeto

1. Clone o Repositório:

```
git clone https://github.com/seu-usuario/alume-teste.git
cd alume-teste
```

2. Instale as Dependências:

```
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Inicie o Servidor de Desenvolvimento:

```
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Acesse a Aplicação: Abra http://localhost:3000 no seu navegador para ver o resultado.

Estrutura do Projeto

- src/app: Páginas principais (page.tsx para a página inicial e success.tsx para a página de sucesso).
- src/components: Componentes organizados em:
  - atoms: Componentes básicos (Input, Select, Button).
  - molecules: Componentes intermediários (PassengerInfo, FlightDetails, etc.).
  - organisms: Componentes complexos (FlightForm, SuccessCard).
  - templates: Layouts (MainLayout).
- src/hooks: Hooks personalizados (ex.: useFlightReservation).
- src/repository: Lógica de acesso à API (ex.: LaunchRepository).
- src/utils/types: Tipagens TypeScript (ex.: launchs.ts).

Fluxo da Aplicação

    Na página inicial (/), o usuário preenche o formulário com:
        Seleção de um voo futuro.
        Nome completo.
        Idade (mínimo 16 anos).
        Indicação de problemas de saúde.
    Ao enviar o formulário, o usuário é redirecionado para a página de sucesso (/success).
    A página de sucesso exibe:
        Informações do passageiro.
        Detalhes do voo (nome, data, status, detalhes da missão).
        Informações técnicas (foguete, launchpad, núcleo).
        Links relacionados.
    O usuário pode clicar em "Novo Cadastro" para voltar à página inicial, onde o formulário estará limpo.

API Utilizada

A aplicação consome a API pública da SpaceX para obter dados de lançamentos futuros:

    Endpoint: https://api.spacexdata.com/v4/launches/upcoming

Possíveis Melhorias

    Adicionar um logo da SpaceX no topo da página inicial.
    Incluir animações sutis (ex.: com Framer Motion).
    Implementar testes unitários com Jest e React Testing Library.
    Adicionar validações mais robustas no backend (se aplicável).
