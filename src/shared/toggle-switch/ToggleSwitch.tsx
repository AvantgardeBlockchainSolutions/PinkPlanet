import { SwitchContainer, SwitchLabel, SwitchInput } from './style'

const ToggleSwitch = (props: any) => {
  const { data, id, isDisable, handleToggle, isChecked } = props

  const handleChange = () => {
    if (!!handleToggle) {
      handleToggle(data)
    }
  }
  return (
    <div>
      <SwitchContainer>
        <SwitchInput id={id} type="checkbox" checked={isChecked} onChange={handleChange} disabled={isDisable} />
        <SwitchLabel />
      </SwitchContainer>
    </div>
  )
}

export default ToggleSwitch
