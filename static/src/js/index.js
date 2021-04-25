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
  } // if (characterData.status === 'unknown'){
//     console.log(characterData)
//     alert('Este personaje tiene un status Unknown')
//     console.log(api.characterData.status)
//     return characterData

//   // new Character(characterData)
// }else if(characterData.status === 'Dead')
// console.log(characterData)
// alert('Este personaje tiene un status Unknown')
// console.log(api.characterData.status)
// return characterData

  }



initApp(currentCaracter)

// console.log(initApp(currentCaracter)
// )

// console.log(api.getCharacter(20))


