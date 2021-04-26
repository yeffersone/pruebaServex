import API from './api.js'
import Character from './character.js'
const api = new API()
let currentCaracter = 1;
const $loadNext = document.querySelector('#load-next')

$loadNext.addEventListener('click', async () => {
  const characterData = await api.getCharacter(++currentCaracter)
  new Character(characterData)
})

async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)
  console.log(characterData)

  if(characterData.status === 'Alive'){
    const characterData = await api.getCharacter(initCharacterId)
    console.log(characterData.status)
    new Character(characterData)
    return Character
  }
  }
initApp(currentCaracter)