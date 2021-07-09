import React from 'react'
import { Button } from '../ui/Button/Button'
import { Item } from '../ui/Item/Item'

export const StaffMenu = props => {
  console.log(`props`, props)
  return (
    <div>
      <h2>{props.title}</h2>
      {props.content.map(city => (
        // text - это пропс
        // key - это не пропс, поэтому он не попадает в объект с пропсами, не передаётся по наследству
        <Item key={city.id} text={city.name} />
      ))}
      <Button name={props.buttonName} />
      {/* внутри интерполяции выполняются логические действия: */}
      {/* <h2>{4+4}</h2> */}
    </div>
  )
}
