/***************************
 * Objetivo: Arquivo para criar CARDS de livros no HTML
 * Data: 26/10/2024
 * Autor: Yasmin 
 * Versão: 1.0
 *  *************************************** */
import {personagens} from './personagens.js';


const setDadosPersonagens = function (ListaDePersonagens) {
    
    let cardPersonagens = document.getElementById('cardPersonagens');

    
    ListaDePersonagens.results.forEach(function(item) {
    
        
        let divCaixaPersonagem = document.createElement('div');
        let h2CaixaTitulo = document.createElement('h2');
    
        
        let textoTitulo = document.createTextNode(item.name);
        let figureCaixaImagem = document.createElement('figure');
        let img = document.createElement('img');
        let divCaixaTexto = document.createElement('div');
        let pCaixaTexto = document.createElement('p');
        let textoDescricao = document.createTextNode(`Status: ${item.status}, Espécie: ${item.species}, Gênero: ${item.gender}`); 
        

        
        divCaixaPersonagem.setAttribute('class', 'caixa_personagens'); 
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo');
        figureCaixaImagem.setAttribute('class', 'caixa_imagem');
        img.setAttribute('src', item.image); 
        img.setAttribute('alt', 'Foto do personagem'); 
       img.setAttribute('name', `Foto do personagem Rick`); 
        divCaixaTexto.setAttribute('class', 'caixa_texto');

    
        cardPersonagens.appendChild(divCaixaPersonagem);
        divCaixaPersonagem.appendChild(h2CaixaTitulo);
        h2CaixaTitulo.appendChild(textoTitulo);
        divCaixaPersonagem.appendChild(figureCaixaImagem);
        figureCaixaImagem.appendChild(img);
        divCaixaPersonagem.appendChild(divCaixaTexto);
        divCaixaTexto.appendChild(pCaixaTexto);
        pCaixaTexto.appendChild(textoDescricao);
})

    }

    const getPersonagensAPI = async function() {
        let url = 'https://rickandmortyapi.com/api/character'; // Substitua pela URL correta

        let response = await fetch(url)
    
        let DadosPersonagens = await response.json()

        setDadosPersonagens(DadosPersonagens)
    }

window.addEventListener('load', function() {
    getPersonagensAPI()
});