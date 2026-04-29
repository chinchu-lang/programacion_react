import Listado from "./componentes/Listado"
<<<<<<< HEAD
import Formulario from "./componentes/formulario"
import "./App.css"

const personas = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true}
=======
import "./App.css"

const personas = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"}
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
    
]

export default function App() {
  
  return (
    <div className="App">
      <h1>Componente APP</h1>
<<<<<<< HEAD
      <div className="Contenedor">
      <Formulario />
      <Listado
        personas={personas}
      />
      </div>
    </div>
  )
}

=======
      <Listado
        personas={personas}
      />
    </div>
  )
}
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
