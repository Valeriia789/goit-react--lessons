// imr + Tab:
import React, { cloneElement } from 'react'

export const Wrapper = props => {
  console.log('props:', props)
  return (
    <div>
      <h2>it is a big problem</h2>
      {props.children}
    </div>
  )
}
