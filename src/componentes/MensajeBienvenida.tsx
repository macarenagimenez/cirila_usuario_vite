import "componentes/MensajeBienvenida.css";

function MensajeBienvenida(props: { texto: string | undefined }) {
  return (
    <div className="base">
      <p> {props.texto?.toUpperCase()}</p>
    </div>
  );
}
export default MensajeBienvenida;
