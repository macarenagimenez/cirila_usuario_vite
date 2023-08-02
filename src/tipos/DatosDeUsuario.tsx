type DatosUsuario = {
  NombreCompleto: string;
  Provincia: string;
  Localidad: string;
  CodigoPostal: string;
  Correo: string;
  Celular: string;
  FormaPago: string;
  FormaEnvio: string;
  FormaContacto: string;
  MensajeOpcional: string;
  [index: string]: string;
};

let datosUsuarioVacio: DatosUsuario = {
  NombreCompleto: "",
  Provincia: "",
  Localidad: "",
  CodigoPostal: "",
  Correo: "",
  Celular: "",
  FormaPago: "",
  FormaEnvio: "",
  FormaContacto: "",
  MensajeOpcional: "",
};
export { datosUsuarioVacio };
export type { DatosUsuario };
