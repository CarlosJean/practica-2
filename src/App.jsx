import { useState } from 'react'
import { Ejercicio1 } from './components/Ejercicio1/Ejercicio1'
import { Ejercicio2 } from './components/Ejercicio2/Ejercicio2'
import { Ejercicio3 } from './components/Ejercicio 3/Ejercicio3'
import { Ejercicio4 } from './components/Ejercicio 4/Ejercicio4'

function App() {

  const handleClick = () => {
    alert('Este mensaje viene desde el componente padre.');
  }

  return (
    <>
      <p>1- Crea un elemento botón que al ser clickeado muestra un alerta.</p>
      <Ejercicio1 />
      <p>2- Crea un elemento select que al cambiar el valor seleccionado muestra una alerta con el valor.</p>
      <Ejercicio2 />
      <p>3 - Crea un elemento input que muestra en consola lo que se escribe.</p>
      <Ejercicio3 />
      <p>4 - Crea un  Button que acepta una prop onClick. Esta función estará definida en el componente padre.</p>
      <Ejercicio4 handleClick={handleClick}/>
    </>
  )
}

export default App
