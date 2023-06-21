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
