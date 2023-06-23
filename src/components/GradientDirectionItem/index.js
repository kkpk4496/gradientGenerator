import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionList, isActive, setActiveButtonId} = props
  const {value, displayText} = directionList

  const clickedButton = () => {
    setActiveButtonId(value)
  }

  return (
    <li>
      <Button type="button" isActive={isActive} onClick={clickedButton}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
