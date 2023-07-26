import Usuario from "componentes/Usuario";
import { createContext, useState } from "react";
import type { DatosUsuario } from "tipos/DatosDeUsuario";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState<DatosUsuario>({
    NombreCompleto: "",
    Provincia: "",
    Localidad: " ",
    CodigoPostal: " ",
    Correo: " ",
    Celular: " ",
    FormaPago: "",
    FormaEnvio: "",
    FormaContacto: "",
  });
  function actualizarUsuario(datoActualizado: string, valor: string) {
    setUsuario((prevState: DatosUsuario) => ({
      ...prevState,
      [datoActualizado]: valor,
    }));
  }

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
