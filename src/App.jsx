import Listado from "./componentes/Listado"
import "./App.css"

const personas = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan"}
    
]

export default function App() {
  
  return (
    <div className="App">
      <h1>Componente APP</h1>
      <Listado
        personas={personas}
      />
    </div>
  )
}

