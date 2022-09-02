export const getPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
  try {
    const data = await fetch(url)
    const result = await data.json()
    return result
  } catch(err) {

  }
}