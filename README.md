# LocalStorage
> Projeto #15 do curso [JavaScript30](https://javascript30.com) que simula uma lista de pedidos (Tapas Menu) onde os dados são persistidos utilizando a API de LocalStorage. 
***
<p align="center">
  <a href="#-preview">Preview</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-aprendizados">Aprendizados</a> •
  <a href="#️-licença">Licença</a> •
  <a href="#️-créditos">Créditos</a> •
</p>

## 📸 Preview
![Gif que mostra o projeto funcionando](./assets/Preview.gif)

## 🛠 Tecnologias
- **HTML5 / CSS3**
- **TypeScript** 

## 🚀 Como Executar
**1. Clonar o repositório:**
```bash
git clone https://github.com/DaviAlvesDev/LocalStorage.git
```
**2. Instalar as dependências:**
```bash
npm install
```
**3. Compilar o código em TypeScript para JavaScript:**
```bash
npm run build
```
**4. Abrir o projeto:** Abra o arquivo `index.html` no seu navegador ou utilize o comando `npm start`
***
🔗 **Se preferir não baixar o projeto:** [acesse-o hospedado no GitHub Pages](https://davialvesdev.github.io/LocalStorage/)

## 📝 Aprendizados
* **Persistência de Estado com LocalStorage API:**
  Implementei a persistência de dados no lado do cliente utilizando a `Web Storage API`. Aprendi a gerenciar o ciclo de vida dos dados transformando estruturas complexas (arrays de objetos) em strings JSON via `JSON.stringify()` para armazenamento e realizando o processo inverso com `JSON.parse()` para recuperação. Isso garante que o estado da aplicação seja mantido de forma resiliente, mesmo após o fechamento do navegador ou recarregamento da página.

* **Otimização via Event Delegation (Delegação de Eventos):**
  Em vez de acoplar múltiplos *listeners* a elementos criados dinamicamente, utilizei o padrão de Delegação de Eventos. Ao registrar um único ouvinte no elemento pai (`<ul>`), aproveitei o fluxo de propagação de eventos (*Event Bubbling*) para capturar interações nos elementos filhos. Essa abordagem resulta em um código mais performático, com menor consumo de memória e garante que novos itens adicionados à lista já nasçam com comportamento funcional.

* **Sincronização entre Estado (Data) e Interface (UI):**
  Pratiquei a arquitetura onde a interface é uma representação direta do estado. Através de uma função de renderização que utiliza o método `.map()`, garanti que qualquer alteração no array de dados — seja a adição de um prato, a alteração do status de conclusão ou a limpeza total da lista — seja refletida de forma consistente e automática tanto no DOM quanto no armazenamento local.

* **Tipagem Estrita e Casting no TypeScript:**
  A definição de uma `interface` para o modelo de dados foi fundamental para garantir a integridade dos objetos manipulados. A aplicação de *type casting* em elementos do DOM (como `as HTMLFormElement` e `as HTMLInputElement`) permitiu acessar propriedades e métodos específicos de forma segura, eliminando ambiguidades do compilador e prevenindo erros de execução comuns ao lidar com elementos que podem ser nulos ou de tipos genéricos.

* **Manipulação de Atributos de Dados (Data Attributes):**
  Utilizei a API de `dataset` para vincular metadados (como o índice do array) diretamente aos elementos HTML. Essa técnica permitiu criar uma ponte de comunicação eficiente entre a interface e a lógica de negócios: ao interagir com um checkbox, o código identifica instantaneamente qual objeto deve ser atualizado na memória através do atributo `data-index`, facilitando a manipulação cirúrgica do estado.
## ⚖️ Licença
Este projeto está sob a licença MIT. 

Para mais informações, acesse o arquivo [LICENSE](LICENSE)

## ✍️ Créditos
> Feito com ☕ por [@DaviAlvesDev](https://github.com/DaviAlvesDev)