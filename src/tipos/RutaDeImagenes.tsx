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
    alt: "Somos el regalo más original",
    texto: "Somos el regalo más original",
  },
];

let rutaParaPieDePagina: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/envios.png",
    alt: "envios, envio internacional",
    texto: "Hacemos envios a todo el país",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/comprasegura.png",
    alt: "compra online",
    texto: "¡Tu compra segura acá!",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/247.png",
    alt: "servicio de atención al cliente",
    texto: "Estamos del otro lado 24/7 :)",
  },
];

let rutaParaPresentacionPagina: rutaDeImagen[] = [
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifParaPaginaDeProductos.gif",
    alt: "regalos para el dia de la madre",
  },
  {
    src: "https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifComoComprar.gif",
    alt: "regalos para el dia de la madre",
  },
];

export {
  rutaParaEncabezado,
  rutaParaImagenesConTexto,
  rutaParaPieDePagina,
  rutaParaPresentacionPagina,
};
export type { rutaDeImagen };
