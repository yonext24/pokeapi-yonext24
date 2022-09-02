import { useLocation } from 'react-router-dom'

export default function Error404 () {
  const a = useLocation()
  console.log(a)
  return <div>
    <img alt="gengar-pokemon" src="../../images/gengar" />
    <h2>Pokemon Not Found 😔</h2>
  </div>
}