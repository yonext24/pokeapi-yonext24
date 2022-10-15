
export const getPokemons = async (props) => {
  const { url = 'https://pokeapi.co/api/v2/pokemon/?limit=40', page = 0 } = props
  const link = page === 0 ? url : `https://pokeapi.co/api/v2/pokemon/?offset=${page*40}&limit=${40}`
  try {
    const data = await fetch(link)
    const result = await data.json()
    return result
  } catch(err) {
    return false
  }
}