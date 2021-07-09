import React from 'react'
import { StaffMenu } from './components/StaffMenu/StaffMenu'

const cities = [
  { name: 'Kyiv', id: '0s9difve' },
  { name: 'London', id: 'bi43y8fgv' }
]

const App = () => {
  return (
    <>
      {/* <StaffMenu title="Преподаватели" buttonName="Добавить преподавателя"/> */}
      <StaffMenu title='Города' buttonName='Добавить город' content={cities} />
      {/* <StaffMenu title='Факультеты' buttonName='Добавить факультет' /> */}
    </>
  )
}

export default App
