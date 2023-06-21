type rutaDeImagen = {
  src: string;
  alt: string;
  className?: string;
  texto?: string;
};

let rutaParaEncabezado: rutaDeImagen[] = [
  {
    src: "imagenes/LogoCirila.png",
    alt: "LogoGaiaCirila",
    className: "imgDeLogo",
    texto: "Objetos únicos hechos a mano.",
  },
  {
    src: "imagenes/GifParaEncabezado.gif",
    alt: "GifEncabezado",
    className: "imgDeRelleno",
  },
  {
    src: "imagenes/ImagenCortinaEncabezado.png",
    alt: "GifEncabezado",
    className: "imgDeRelleno",
  },
];

export { rutaParaEncabezado };
export type { rutaDeImagen };
