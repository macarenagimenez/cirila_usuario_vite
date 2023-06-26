import "componentes/MensajeBienvenida.css";

function MensajeBienvenida(props) {
  return (
    <div className="base">
      <p>{props.texto}</p>
    </div>
  );
}
export default MensajeBienvenida;
