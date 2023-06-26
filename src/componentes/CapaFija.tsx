import { Outlet } from "react-router-dom";
import BarraDeNavegacion from "componentes/BarraDeNavegacion";
import PieDePagina from "componentes/PieDePagina";

const CapaFija = () => {
  return (
    <>
      <BarraDeNavegacion />
      <Outlet />
      <PieDePagina />
    </>
  );
};

export default CapaFija;
