import { css } from '@emotion/react'
import styled from '@emotion/styled'

const buttonSecondary = css`
  background-color: #21f360;
  font-size: 24px;
`

const buttonDefault = css`
  background-color: #e078e4;
  font-size: 14px;
`

const CustomSize = props => {
  console.log(`props styled:`, props)
  // в Button.js ставим CustomButton size="medium" или "small"
  if (props.size === 'small') {
    return buttonDefault
  }
  return buttonSecondary
}

export const CustomButton = styled.button`
${CustomSize}
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  /* font-size: ${props => (props.size === 'small' ? '14px' : '25px')}; */
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
