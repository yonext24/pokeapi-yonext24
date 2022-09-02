import { getPokemons } from "./getPokemons";

export default async function getPokemonsDetail() {
  const data = await getPokemons()
  const { results } = data
  const details = results.map(async (singlePokemon) => {
      return await getPokemons(singlePokemon.url)
  })
  const final = await Promise.all(details)
  return final
}