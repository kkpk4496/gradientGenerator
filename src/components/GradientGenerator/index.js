import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  AppContainer,
  Heading,
  Para,
  InputContainer,
  ColorInput,
  GenerateButton,
  UnderorderedList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstInput: '#8ae323',
    secondInput: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradient: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  firstChange = event => {
    this.setState({firstInput: event.target.value})
  }

  secondChange = event => {
    this.setState({secondInput: event.target.value})
  }

  onGenerate = () => {
    const {firstInput, secondInput, activeDirection} = this.state
    this.setState({
      gradient: `to ${activeDirection}, ${firstInput}, ${secondInput}`,
    })
  }

  setActiveButtonId = direction => {
    this.setState({
      activeDirection: direction,
    })
  }

  render() {
    const {gradient, firstInput, secondInput, activeDirection} = this.state
    return (
      <AppContainer gradient={gradient} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnderorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionList={each}
              isActive={activeDirection === each.value}
              setActiveButtonId={this.setActiveButtonId}
            />
          ))}
        </UnderorderedList>
        <Para>Pick the Colors</Para>
        <InputContainer>
          <div>
            <p>{firstInput}</p>
            <ColorInput
              type="color"
              value={firstInput}
              onChange={this.firstChange}
            />
          </div>
          <div>
            <p>{secondInput}</p>
            <ColorInput
              type="color"
              value={secondInput}
              onChange={this.secondChange}
            />
          </div>
        </InputContainer>
        <GenerateButton onClick={this.onGenerate} type="button">
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
