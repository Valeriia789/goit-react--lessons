import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../ui/Button/Button'
import { Item } from '../ui/Item/Item'

export const StaffMenu = ({
  // можно указать параметры по дефолту:
  // title = 'not found',
  // content = [],
  // buttonName = 'click me :)'

  // или установить PropTypes и:
  title,
  content,
  buttonName
}) => {
  // console.log(`props`, props)
  return (
    <div>
      <h2>{title}</h2>
      {/* content? - новый синтаксис, проверка на наличие свойства. 
      Если там ничего нет, просто не запускай правую сторону */}
      {content.map(city => (
        // text - это пропс
        // key - это не пропс, поэтому он не попадает в объект с пропсами, не передаётся по наследству
        <Item key={city.id} text={city.name} />
      ))}
      <Button name={buttonName} buttonColor='Secondary'/>
      {/* внутри интерполяции выполняются логические действия: */}
      {/* <h2>{4+4}</h2> */}
    </div>
  )
}

// PropTypes на случай, если никакие данные не пришли из вне
StaffMenu.defaultProps = {
  title: 'not found',
  content: [],
  buttonName: 'click me :)'
}

StaffMenu.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  buttonName: PropTypes.string
}
