import { ReactComponent as Leftsvg } from '../../images/bxs-left-arrow.svg'
import { ReactComponent as Rightsvg } from '../../images/bxs-right-arrow.svg'
import './buttons.css'

export default function Buttons ({state, setState, list = []}) {
  function handleNextPhoto() {
    if (state >= list.length - 1) {
      setState(0)
      return
    }
    setState(state+1)
  }
  function handlePrevPhoto() {
    if (state <= 0) {
      setState(list.length - 1)
      return
    }
    setState(state-1)
  }
  return (
    <>
      <button className='left btn' onClick={handlePrevPhoto} >
        <Leftsvg />
      </button>
      <button className='right btn' onClick={handleNextPhoto} >
        <Rightsvg />
      </button>
    </>
  )
}