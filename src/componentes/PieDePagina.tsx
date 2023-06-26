import { rutaParaPieDePagina } from "tipos/RutaDeImagenes";
import type { rutaDeImagen } from "tipos/RutaDeImagenes";
import "componentes/PieDePagina.css";

function PieDePagina() {
  const informacionDeImagenesParaPieDePagina = (rutaParaPieDePagina) => {
    let contenido: JSX.Element[] = [];

    rutaParaPieDePagina.map((imagen: rutaDeImagen) => {
      contenido.push(
        <div className="textoConIconos">
          <img src={imagen.src} alt={imagen.alt} width="200px" height="200px" />
          <p>{imagen.texto}</p>
        </div>
      );
    });
    return contenido;
  };

  return (
    <section className="pieDePagina">
      <div className="pieDePagina__contenedor">
        {informacionDeImagenesParaPieDePagina(rutaParaPieDePagina)}
      </div>
      <div className="contacto">
        <text>
          COMUNICATE CON NOSOTRAS <hr />
          hola@gaiacirila.com.ar | +54 9 2657-307339
        </text>
      </div>
    </section>
  );
}

export default PieDePagina;
