import Usuario from "componentes/Usuario";
import { createContext, useState } from "react";
import type { DatosUsuario } from "tipos/DatosDeUsuario";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState<DatosUsuario>({
    NombreCompleto: " ",
    Provincia: " ",
    Localidad: " ",
    CP: " ",
    Correo: " ",
    Celular: " ",
    FormaPago: "",
    FormaEnvio: "",
    FormaContacto: "",
  });
  function handleUsuario(e) {
    setUsuario({
      ...usuario,
      NombreCompleto: e.target.value,
    });
  }
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, handleUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
