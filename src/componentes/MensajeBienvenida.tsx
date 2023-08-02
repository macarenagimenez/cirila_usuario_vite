import "componentes/MensajeBienvenida.css";

function MensajeBienvenida(props: { texto: string }) {
  return (
    <div className="base">
      <p>{props.texto}</p>
    </div>
  );
}
export default MensajeBienvenida;
