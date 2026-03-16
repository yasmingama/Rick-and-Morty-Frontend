# 🧪 Rick and Morty Character Explorer

Uma aplicação Web interativa que consome a API oficial de Rick and Morty para listar e exibir cards detalhados dos personagens da série. O projeto foca em manipulação dinâmica do DOM e consumo de dados assíncronos.

## 🚀 Demonstração Visual
*Aqui você pode adicionar um link para o seu site no ar ou uma imagem do projeto pronto.*

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi desenvolvido utilizando o "Vanilla Triple" (HTML, CSS e JS puro) com as seguintes implementações técnicas:

- **JavaScript ES6+**: 
    - Uso de `async/await` para lidar com requisições assíncronas de forma limpa.
    - **Fetch API** para integração com serviços externos.
    - **DOM Manipulation**: Criação dinâmica de elementos (`createElement`, `appendChild`) para renderizar os cards sem precisar de HTML estático.
    - **Módulos JS**: Organização do código utilizando `import` e `export`.
- **CSS3 Personalizado**:
    - Layout responsivo utilizando técnicas de `float` e `box-sizing`.
    - Identidade visual temática com efeitos de `box-shadow` e cores personalizadas.
    - Uso de `background-attachment: fixed` para criar efeitos de rolagem profissionais.

## 📦 Estrutura do Projeto

- `index.html`: Estrutura principal com os containers de renderização.
- `css/style.css`: Estilização completa, incluindo os cards dinâmicos.
- `js/module/personagens.js`: Base de dados local (JSON) para fallback ou testes.
- `js/module/carregar.Dados.js`: Lógica principal de consumo da API e criação dos elementos na tela.

## ⚙️ Como Funciona o Código

1. Ao carregar a página (`window.load`), a função `getPersonagensAPI()` é disparada.
2. O código faz uma requisição para `https://rickandmortyapi.com/api/character`.
3. Os dados recebidos são processados e enviados para a função `setDadosPersonagens`.
4. Para cada personagem, o script cria automaticamente uma estrutura de card:
   - Nome do personagem
   - Imagem oficial
   - Detalhes (Status, Espécie e Gênero)

## 🎨 Preview de Estilização
O projeto utiliza a paleta de cores icônica da série, destacando-se o:
- **Verde Portal:** `chartreuse`
- **Fundo Profundo:** `#0c0c0c`

---
Desenvolvido por [Yasmin Gama](https://github.com/yasmingama) 
*"Wubba Lubba Dub Dub!"* 🛸