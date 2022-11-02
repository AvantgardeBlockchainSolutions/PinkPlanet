import { RangeSliderCont, RangeSliderInput } from './style'

const RangeSlider = (props: any) => {
  const { ldPercentage, setLdPercentage } = props


  const handleOnChange = (e: any) => {
    const value = parseInt(e.target.value)
    setLdPercentage(value)
  }

  return (
    <RangeSliderCont>
      <RangeSliderInput type="range" value={ldPercentage} className="slider" id="myRange" onChange={handleOnChange} />
    </RangeSliderCont>
  )
}

export default RangeSlider
