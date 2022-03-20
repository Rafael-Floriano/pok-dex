
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
     pokemon.addEventListener('click',() => {
         
          const cartaoPokemonAberto = document.querySelector('.aberto')
          cartaoPokemonAberto.classList.remove('aberto')
     
          const idPokemonSelecionado = pokemon.attributes.id.value
          const cartaoPokemonParaAbrir = document.getElementById('cartao-'+idPokemonSelecionado)

          cartaoPokemonParaAbrir.classList.add('aberto')

          const botaoPokemonSelecionado = document.getElementById(idPokemonSelecionado)
          botaoPokemonSelecionado.classList.add('ativo')     

          const botaoPokemonAberto = document.querySelector('.ativo')
          botaoPokemonAberto.classList.remove('ativo')
          
     })
})