import "componentes/CapaDeProducto.css";

function CapaDeProducto(props) {
  return (
    <div className="MuestraDeProducto">
      <img
        src={props.informacionProducto.urlImagen}
        alt={props.informacionProducto.nombre}
        className="ImagenDelProducto"
      />
      <p className="NombreDelProducto">{props.informacionProducto.nombre}</p>
      <p className="PrecioDelProducto">${props.informacionProducto.precio}</p>
      <p className="BotonAgregarAlCarrito">¡Al carrito 😀!</p>
    </div>
  );
}

export default CapaDeProducto;
