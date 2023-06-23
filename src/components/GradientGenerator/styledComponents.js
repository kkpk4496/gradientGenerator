import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  background-image: linear-gradient(${props => props.gradient});
`
export const Heading = styled.h1`
  font-family: 'roboto';
`

export const Para = styled.p`
  font-family: roboto;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  min-width: 300px;
`
export const ColorInput = styled.input`
  border: none;
  background-color: transparent;
  width: 75px;
  height: 40px;
`
export const GenerateButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #00c9b7;
  color: #1e293b;
  margin: 50px;
  width: 100px;
  height: 40px;
  cursor: pointer;
`

export const UnderorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 30vw;
`
