import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 80px;
  font-family: roboto;
  font-weight: 800;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
