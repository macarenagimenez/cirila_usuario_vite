type rutaDeImagen = {
  src: string;
  alt: string;
  className?: string;
  texto?: string;
};

let rutaParaEncabezado: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/LogoCirila.png",
    alt: "LogoGaiaCirila",
    className: "imgDeLogo",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifParaEncabezado.gif",
    alt: "GifEncabezado",
    className: "imgDeRelleno",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifParaEncabezado2.gif",
    alt: "GifEncabezado",
    className: "imgDeRelleno",
  },
];

let rutaParaImagenesConTexto: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/kitRegalo.jpg",
    alt: "SomosElMejorRegalo",
    texto: "Somos el mejor regalo.",
  },
];

let rutaParaPieDePagina: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/envios.png",
    alt: "Envios a todo el país",
    texto: "Hacemos envios a todo el país",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/comprasegura.png",
    alt: "Compra segura",
    texto: "¡Tu compra segura acá!",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/247.png",
    alt: "Atencion al cliente",
    texto: "Estamos del otro lado 24/7 :)",
  },
];

let rutaParaPresentacionPagina: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifParaPaginaDeProductos.gif",
    alt: "Gif de productos",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifComoComprar.gif",
    alt: "Gif de productos",
  },
];

export {
  rutaParaEncabezado,
  rutaParaImagenesConTexto,
  rutaParaPieDePagina,
  rutaParaPresentacionPagina,
};
export type { rutaDeImagen };
