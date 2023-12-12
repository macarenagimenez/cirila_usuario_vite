type DatosUsuario = {
  NombreCompleto: string;
  LocalidadProvincia: string;
  Domicilio: string;
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
  LocalidadProvincia: "",
  Domicilio: "",
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
