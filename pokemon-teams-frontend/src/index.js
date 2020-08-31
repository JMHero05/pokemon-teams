const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {

  const getTrainers = () => {
    fetch(TRAINERS_URL)
      .then(response => response.json())
      .then(trainers => {
        renderTrainers(trainers)
      })
  }

  const renderTrainers = trainers => {
    for (const trainer of trainers) {
      renderTrainer(trainer)
    }
  }

  const renderTrainer = trainer => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.dataset.id = trainer.id
    div.textContent = trainer.name
    const ul = document.createElement('ul')
    div.innerHTML = `
    <button data-trainer-id=${trainer.id}>Add Pokemon</button>
    `
    div.append(ul)
    displayPokemons(ul, trainer.pokemons)
    console.log(trainer.pokemons)
    main.append(div)
  }

  const displayPokemons = (ul, pokemons) => {
    for (const pokemon of pokemons) {
      displayPokemon(ul, pokemon)
    }
  }

  const displayPokemon = (ul, pokemon) => {
    const li = document.createElement('li')
    li.innerHTML = `
    ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `
    console.log(li)
    ul.append(li)
  }

  getTrainers()
})