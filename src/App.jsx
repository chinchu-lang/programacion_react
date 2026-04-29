import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"

import "./App.css"

const personas = [
  { documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true, año: "2", divicion: "4" },
  { documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: "2", divicion: "4" },
  { documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: "2", divicion: "4" },
  { documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true, año: "2", divicion: "4" }

]

export default function App() {

  conts[personas, setPersonas] = useState(personasDefault);




  const guardar = (persona) => {
    console.log(persona);

    let nuevasPersonas = [...personas];
    nuevasPersonas.push(personas);
    setPersonas(nuevasPersonas);
  }


  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
        <Formulario guardar={(persona) => guardar(persona)} />
        <Listado
          personas={personas}
        />
      </div>
    </div>
  )

}
