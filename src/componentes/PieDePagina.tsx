import { rutaParaPieDePagina } from "tipos/RutaDeImagenes";
import type { rutaDeImagen } from "tipos/RutaDeImagenes";
import "componentes/PieDePagina.css";
import "componentes/responsive.css";

function PieDePagina() {
  const informacionDeImagenesParaPieDePagina = (
    rutaParaPieDePagina: rutaDeImagen[]
  ) => {
    let contenido: JSX.Element[] = [];

    rutaParaPieDePagina.map((imagen: rutaDeImagen, index: number) => {
      contenido.push(
        <div className="textoConIconos" key={index}>
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
        <p>CONTÁCTATE CON NOSOTRAS </p> <hr />
        <p>
          <a
            className="contacto_hover"
            onClick={() => {
              window.location.href = "mailto:hola@gaiacirila.com.ar";
            }}
          >
            {" "}
            hola@gaiacirila.com.ar{" "}
          </a>{" "}
        </p>
        <p>
          <a
            href="https://wa.me/542657307339"
            target="_blank"
            rel="noreferrer"
            className="contacto_hover"
          >
            {" "}
            +54 2657-307339
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/gaia.cirila/"
            target="_blank"
            rel="noreferrer"
            className="contacto_hover"
          >
            @gaia.cirila
          </a>
        </p>
      </div>
    </section>
  );
}

export default PieDePagina;
