import {
    ModalCont,
    FlexSBCont,
    FlexCont,
    TitleText,
    InfoSmallText,
    SettingSubTitle,
    SettingCont,
    SlippageCont,
    SettingValBox,
    SettingInput,
  } from './style'
  import CrossIcon from 'assets/icons/blue-cross-icon.png'
  import { floatNumRegex, positiveNumRegex } from 'shared/helpers/regexConstants'
  
  const Settings = (props: any) => {
    const { slippageVal, setSlippageVal, setShowSettings, handleSlippage, deadLine, setDeadLine } = props
  
    const handleSlippageValue = async (e: any) => {
      const { value } = e.target
      if (floatNumRegex.test(value.toString())) {
        if (parseFloat(value) <= 100) {
          setSlippageVal(value)
          handleSlippage(parseFloat(value))
        }
      }
      if (!value) {
        setSlippageVal('')
        handleSlippage(0)
      }
    }
  
    const handleDeadLine = (e: any) => {
      const { value } = e.target
      if (positiveNumRegex.test(value.toString())) {
        if (parseFloat(value) <= 100) {
          setDeadLine(parseInt(value))
        }
      }
      if (!value) {
        setDeadLine('')
      }
    }
  
    return (
      <ModalCont>
        <SettingCont>
          <FlexSBCont className="setting-header">
            <TitleText>Settings</TitleText>
            <img className="cross-icon" src={CrossIcon} alt="" onClick={() => setShowSettings(false)} />
          </FlexSBCont>
          <SettingSubTitle>Slippage Tolerance</SettingSubTitle>
          <SlippageCont>
            <SettingValBox onClick={() => handleSlippage(0.1)}>0.1%</SettingValBox>
            <SettingValBox onClick={() => handleSlippage(0.5)}>0.5%</SettingValBox>
            <SettingValBox onClick={() => handleSlippage(1)}>1%</SettingValBox>
            <SettingInput placeholder="0" onChange={handleSlippageValue} value={slippageVal && slippageVal} />
          </SlippageCont>
          <SettingSubTitle>Transaction Deadline</SettingSubTitle>
          <FlexCont className="dead-line-box">
            <SettingInput value={deadLine} onChange={handleDeadLine} />
            <InfoSmallText className="minute-text">Minutes</InfoSmallText>
          </FlexCont>
        </SettingCont>
      </ModalCont>
    )
  }
  
  export default Settings
  