import { createContext, useState } from "react";
import type { DatosUsuario } from "tipos/DatosDeUsuario";
import { datosUsuarioVacio } from "tipos/DatosDeUsuario";

interface UsuarioContextState {
  usuario: DatosUsuario;
  setUsuario: (value: React.SetStateAction<DatosUsuario>) => void;
  actualizarUsuario: (datoActualizado: string, valor: string) => void;
}

const usuarioContextStateInicial: UsuarioContextState = {
  usuario: datosUsuarioVacio,
  setUsuario: () => void 0,
  actualizarUsuario: () => void 0,
};

export const UsuarioContext = createContext<UsuarioContextState>(
  usuarioContextStateInicial
);

export function UsuarioProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const usuarioEstadoInicial = (): DatosUsuario => {
    const usuarioAlmacenado = window.localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
      return JSON.parse(usuarioAlmacenado);
    } else {
      return datosUsuarioVacio;
    }
  };

  const [usuario, setUsuario] = useState<DatosUsuario>(usuarioEstadoInicial());

  const updateLocalStorage = (estado: DatosUsuario) => {
    window.localStorage.setItem("usuario", JSON.stringify(estado));
  };

  function actualizarUsuario(datoActualizado: string, valor: string) {
    let nuevoValorUsuario: DatosUsuario = structuredClone(usuario);
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
