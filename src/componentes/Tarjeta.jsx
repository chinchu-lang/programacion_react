export default function Tarjeta({documento, nombres, apellidos}) {

    return(
        <div className="Tarjeta">
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
        </div>
    )
}
