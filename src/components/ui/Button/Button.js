import React from 'react'
// import './ButtonStyle.css'
// import styles from './Button.module.css'
import { CustomButton } from './Button.styles'
// yстанавливаем Emotion (npm install --save @emotion/react u npm install --save @emotion/styled)

export const Button = ({ name, buttonColor }) => (
  <CustomButton size="small">{name}</CustomButton>
)

// в StaffMenu можем передать buttonColor='Secondary' или buttonColor='Default'
// const currentColor = {
//   Secondary: styles.ButtonSecondary,
//   Default: styles.ButtonDefault
// }

// export const Button = ({ name, buttonColor }) => (
//   <button className={[styles.CustomButton, currentColor[buttonColor]].join(' ')}>
//     {name}
//   </button>
// )
// console.log(`styles`, styles)

// export const Button = props => {
//   console.log(`props`, props)
//   return <button className="button">{props.name}</button>
// }
