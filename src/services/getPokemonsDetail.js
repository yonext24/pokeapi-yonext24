import { getPokemons } from "./getPokemons";

export default async function getPokemonsDetail(props) {
  if (!props.filteredPokemons) {
    const data = await getPokemons({page:props.p})
    const { results } = data
    const details = results.map(async (singlePokemon) => {
        return getPokemons({url: singlePokemon.url})
    })
    const final = await Promise.all(details)
    return final
  }
  else {
    const filteredByPage = props.filteredPokemons.filter((element, index) => {
      if (props.p === 0 && index < 20) return true 
      else if (index < props.p * 20) {
        return false
      }
      else if (index > ((props.p * 20) + 19)) {
        return false
      }
      return true
    })
    const details = filteredByPage.map(async (singlePokemon) => {
        return getPokemons({url: singlePokemon.url})
    })
    const final = await Promise.all(details)
    return final
  }
}