export default function Tarjeta({documento, nombres, apellidos, alumno,año,divicion}) {

    return(
        <div className="Tarjeta"
            style={{backgroundColor: alumno ? "aquamarine" : "blueviolet",
                    color: alumno ? "black" : "white "
            }}
        >
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
            <h4>{año}, {divicion}</h4>
        </div>
    )
}
