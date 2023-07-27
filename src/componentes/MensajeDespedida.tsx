import "componentes/MensajeDespedida.css";
import { Link } from "react-router-dom";
import { UsuarioContext } from "contexts/UsuarioContexto";
import { useContext } from "react";
export default function MensajeDespedida() {
  const { usuario } = useContext<DatosUsuario>(UsuarioContext);
  //TODO estilizar mensaje despedida, mas gracioso
  return (
    <div className="mensajeDespedida">
      <p>
        🤍 Gracias {usuario.NombreCompleto} por creer en Gaia Cirila.🤍
        <br />
        <br /> 🛒 ¡En menos de 24hs, yo (Macu) me estaré contactando con vos
        para completar tu compraaaa!
      </p>
      <Link to="/">
        <button className="botonBasico botonVolver">
          😚 Seguí chusmeando la tiendita!
        </button>
      </Link>
    </div>
  );
}
