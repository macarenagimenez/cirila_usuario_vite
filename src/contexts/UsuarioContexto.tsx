import Usuario from "componentes/Usuario";
import { createContext, useState } from "react";
import type { DatosUsuario } from "tipos/DatosDeUsuario";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState<DatosUsuario>({
    NombreCompleto: " Macarena",
    Provincia: " San Luis ",
    Localidad: " ",
    CP: " ",
    Correo: " ",
    Celular: " ",
    FormaPago: "efectivo",
    FormaEnvio: "",
    FormaContacto: "",
  });
  function actualizarUsuario(datoActualizado, valor) {
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
