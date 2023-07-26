import "componentes/MensajeDespedida.css";
import { Link } from "react-router-dom";
export default function MensajeDespedida() {
  //TODO estilizar mensaje despedida, mas gracioso
  return (
    <div className="mensajeDespedida">
      <p>
        Gracias por confiar en Gaia Cirila. En menos de 24hs, yo (Macu) me
        estaré contactando con vos para completar tu compraaaa!
      </p>
      <Link to="/">
        <button className="botonBasico botonVolver">Volver al inicio</button>
      </Link>
    </div>
  );
}
