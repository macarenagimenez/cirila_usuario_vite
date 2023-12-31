import "componentes/MensajeDespedida.css";
import { Link } from "react-router-dom";
import { UsuarioContext } from "contexts/UsuarioContexto";
import { useContext } from "react";
import "componentes/responsive.css";
export default function MensajeDespedida() {
  const { usuario } = useContext(UsuarioContext);
  //TODO estilizar mensaje despedida, mas gracioso
  return (
    <div className="mensajeDespedida">
      <p>
        🤍 Gracias {usuario.NombreCompleto} por creer en Gaia Cirila.🤍
        <br />
        <br /> 🛒 ¡En menos de 24hs, yo (Macu) me estaré contactando con vos
        para completar tu compraaaa!
        <br />
        <br />
        <small>📫 No olvides de chequear la bandeja de spam. </small>
      </p>
      <Link to="/">
        <button className="botonBasico botonVolver">
          😚 Seguí chusmeando la tiendita!
        </button>
      </Link>
    </div>
  );
}
