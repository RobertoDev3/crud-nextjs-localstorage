# CRUD com Next.js e LocalStorage

Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) utilizando Next.js e LocalStorage para armazenamento de dados no navegador.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **LocalStorage**: Armazenamento de dados no navegador.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS baseado em utilitários para estilizar a aplicação.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações e transições suaves.
- **[shadcn/ui](https://ui.shadcn.dev/)**: Coleção de componentes UI construídos com Radix UI e Tailwind CSS.

## Funcionalidades

- Adicionar novos itens.
- Listar itens armazenados.
- Editar itens existentes.
- Remover itens.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 22.14.0 ou superior)
- [Yarn](https://classic.yarnpkg.com/lang/en/) (versão 1.22.22 ou superior)

## Documentação do Projeto

### Dependências e Ferramentas Utilizadas

1. **Yarn**:

   - Yarn é utilizado como gerenciador de pacotes neste projeto. Ele simplifica o gerenciamento de dependências e oferece instalações mais rápidas em comparação ao npm.

2. **Tailwind CSS**:

   - Tailwind CSS é usado para estilizar a aplicação. É um framework CSS baseado em utilitários que permite um desenvolvimento rápido de interfaces com classes pré-definidas.

3. **Framer Motion**:

   - Framer Motion é integrado ao projeto para lidar com animações e transições. Ele fornece uma API declarativa para criar animações suaves e complexas.

4. **shadcn**:

   - shadcn é uma coleção de componentes UI construídos com Radix UI e Tailwind CSS. Ele oferece uma base sólida para criar interfaces acessíveis e personalizáveis, permitindo que os desenvolvedores adaptem os componentes às necessidades específicas do projeto.

### Funcionalidades Implementadas

- Operações CRUD utilizando LocalStorage.
- Design responsivo com Tailwind CSS.
- Animações e transições suaves com Framer Motion.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/crud-nextjs-localstorage.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd crud-nextjs-localstorage
   ```
3. Instale as dependências:
   ```bash
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```
5. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

- **/src/app**: Contém as páginas principais da aplicação, como layout e páginas de erro.
- **/src/components**: Componentes reutilizáveis organizados em subpastas:
  - **common**: Componentes genéricos como botões, modais e cartões.
  - **layout**: Componentes relacionados ao layout, como o cabeçalho.
  - **ui**: Componentes de interface do usuário, como inputs, selects e diálogos.
- **/src/lib**: Funções utilitárias e helpers.
- **/src/providers**: Provedores de contexto ou estado global.
- **/src/styles**: Estilos globais e configurações de CSS.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).

---

Feito por Roberto Teixeira.
Siga-me no [LinkedIn](https://www.linkedin.com/in/robertotda/) e no [GitHub](https://github.com/RobertoDev3).
