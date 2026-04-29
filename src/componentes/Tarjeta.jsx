<<<<<<< HEAD
export default function Tarjeta({documento, nombres, apellidos, alumno}) {

    return(
        <div className="Tarjeta"
            style={{backgroundColor: alumno ? "aquamarine" : "blueviolet",
                    color: alumno ? "black" : "white "
            }}
        >
=======
export default function Tarjeta({documento, nombres, apellidos}) {

    return(
        <div className="Tarjeta">
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
        </div>
    )
}
<<<<<<< HEAD

=======
>>>>>>> 103644cce3c896724bc8f349f9ffa6acec75e623
