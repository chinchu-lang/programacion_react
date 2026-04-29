import Tarjeta from "./Tarjeta";


export default function Listado({personas}) {

    return(
<<<<<<< HEAD
        <div style={{flex: 3}}> 
=======
        <div>
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
            <h1>Componente Listado</h1>
            <div className="Listado">
            {personas.map((persona, index) =>

<<<<<<< HEAD
            <Tarjeta 
                key={index}
                documento={persona.documento}
                apellidos={persona.apellidos}
                nombres={persona.nombres}
                alumno={persona.alumno}
=======
            <Tarjeta
                documento={persona.documento}
                apellidos={persona.apellidos}
                nombres={persona.nombres}
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
            />

            )}
            </div>
        </div>
    )
}
<<<<<<< HEAD

=======
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
