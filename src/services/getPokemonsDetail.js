import { getPokemons } from "./getPokemons";

export default async function getPokemonsDetail(p = 0) {
  const data = await getPokemons({page:p})
  const { results } = data
  const details = results.map(async (singlePokemon) => {
      return getPokemons({url: singlePokemon.url})
  })
  const final = await Promise.all(details)
  return final
}