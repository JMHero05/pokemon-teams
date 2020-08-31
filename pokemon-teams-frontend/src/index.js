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

    main.append(div)
  }

  getTrainers()
})