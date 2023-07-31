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
    src: "imagenes/GifParaEncabezado2.gif",
    alt: "GifEncabezado",
    className: "imgDeRelleno",
  },
];

let rutaParaImagenesConTexto: rutaDeImagen[] = [
  {
    src: "imagenes/kitRegalo.jpg",
    alt: "SomosElMejorRegalo",
    texto: "Somos el mejor regalo.",
  },
];

let rutaParaPieDePagina: rutaDeImagen[] = [
  {
    src: "imagenes/envios.png",
    alt: "Envios a todo el país",
    texto: "Hacemos envios a todo el país",
  },
  {
    src: "imagenes/comprasegura.png",
    alt: "Compra segura",
    texto: "¡Tu compra segura acá!",
  },
  {
    src: "imagenes/247.png",
    alt: "Atencion al cliente",
    texto: "Estamos del otro lado 24/7 :)",
  },
];

let rutaParaPresentacionPagina: rutaDeImagen[] = [
  { src: "imagenes/GifParaPaginaDeProductos.gif", alt: "Gif de productos" },
  { src: "imagenes/GifComoComprar.gif", alt: "Gif de productos" },
];

export {
  rutaParaEncabezado,
  rutaParaImagenesConTexto,
  rutaParaPieDePagina,
  rutaParaPresentacionPagina,
};
export type { rutaDeImagen };
