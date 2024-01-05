import { useState } from 'react'
import { Ejercicio1 } from './components/Ejercicio1/Ejercicio1'
import { Ejercicio2 } from './components/Ejercicio2/Ejercicio2'

function App() {
  return (
    <>
      <p>1- Crea un elemento botón que al ser clickeado muestra un alerta.</p>
      <Ejercicio1 />
      <p>2- Crea un elemento select que al cambiar el valor seleccionado muestra una alerta con el valor.</p>
      <Ejercicio2 />

    </>
  )
}

export default App
