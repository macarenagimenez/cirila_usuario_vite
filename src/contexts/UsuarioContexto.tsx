import Usuario from "componentes/Usuario";
import { createContext, useState } from "react";
import type { DatosUsuario } from "tipos/DatosDeUsuario";
import { datosUsuarioVacio } from "tipos/DatosDeUsuario";

export const UsuarioContext = createContext<DatosUsuario>(datosUsuarioVacio);

export function UsuarioProvider({ children }) {
  let usuarioEstadoInicial: DatosUsuario = datosUsuarioVacio;
  if (window.localStorage.getItem("usuario") == null) {
    window.localStorage.setItem("usuario", JSON.stringify(datosUsuarioVacio));
  } else {
    usuarioEstadoInicial = JSON.parse(window.localStorage.getItem("usuario"));
  }

  const [usuario, setUsuario] = useState<DatosUsuario>(usuarioEstadoInicial);

  const updateLocalStorage = (estado: DatosUsuario) => {
    window.localStorage.setItem("usuario", JSON.stringify(estado));
  };

  function actualizarUsuario(datoActualizado: string, valor: string) {
    let nuevoValorUsuario = structuredClone(usuario);
    nuevoValorUsuario[datoActualizado] = valor;
    setUsuario(nuevoValorUsuario);

    updateLocalStorage(nuevoValorUsuario);
  }

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
