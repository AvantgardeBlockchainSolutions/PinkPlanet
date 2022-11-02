import styled from 'styled-components'

export const RangeSliderCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`
export const RangeSliderInput = styled.input`
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  width: 100%;
  height: 4px;
  background: transparent linear-gradient(270deg, #16102f 0%, #55b7ff 100%) 0% 0% no-repeat padding-box;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  &::-webkit-slider-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent linear-gradient(180deg, #55b7ff 0%, #3037da 100%) 0% 0% no-repeat padding-box;
    border: 0;
    cursor: pointer;
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent linear-gradient(180deg, #55b7ff 0%, #3037da 100%) 0% 0% no-repeat padding-box;
    border: 0;
    cursor: pointer;
  }
  &::-moz-range-progress {
    width: 100%;
    height: 4px;
    background: transparent linear-gradient(270deg, #16102f 0%, #55b7ff 100%) 0% 0% no-repeat padding-box;
    outline: none;
    transition: opacity 0.2s;
  }
`
