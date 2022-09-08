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
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  right: 0;
  top: 0;
`
const Span = styled.span`
  color: white;
  font-size: 1rem;
  text-align: center;
`
const Stat = styled.div`
  width: 60px;
  height: 60px;
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
    filter: invert(40%);
    z-index: -1;
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
  console.log(orderedStats)
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