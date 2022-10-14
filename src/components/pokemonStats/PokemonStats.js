import styled from "styled-components";
import hp from '../../images/hp.svg'
import attack from '../../images/attack.svg'
import defense from '../../images/defense.svg'
import speed from '../../images/speed.svg'
import evasion from '../../images/evasion.svg'
import precision from '../../images/precision.svg'
import special_attack from '../../images/special_attack.svg'
import special_defense from '../../images/special_defense.svg'

const MyContainer = styled.div`
  height: 90%;
  display: flex;
  width: 10%;
  flex-flow: row wrap;
  align-content: space-around;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 10px;
  @media (max-width: 1055px) {
    width: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    right: 20px;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    right: 3px;
  }
`
const Span = styled.span`
  width: 100%;
  color: white;
  font-size: 1rem;
  text-align: center;
  @media (max-width: 1055px) {
    grid-column: 1/3;
  }
`
const Stat = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: white;

  &::after {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat ;
    filter: invert(40%);
    z-index: -1;
  }
  @media (max-width: 750px) {
    font-size: 1rem
  }
`

function statChecker (stat) {
  if (stat === 'hp') return hp
  if (stat === 'attack') return attack
  if (stat === 'defense') return defense
  if (stat === 'speed') return speed
  if (stat === 'precision') return precision
  if (stat === 'evasion') return evasion
  if (stat === 'special-attack') return special_attack
  if (stat === 'special-defense') return special_defense
  return hp
}

export default function PokemonStats ({ stats }) {
  const orderedStats = stats.map(singleStat => {
    return [singleStat.stat.name, singleStat.base_stat]
  })
  return <MyContainer>
    <Span>Base <br/> Stats</Span>
    {
      orderedStats.map(stat => {
        const number = stat[1]
        const finalStat = statChecker(stat[0])
        return <Stat key={finalStat} image={finalStat}>{number}</Stat>
      })
    }
  </MyContainer>


}