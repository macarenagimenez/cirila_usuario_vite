import { Outlet } from "react-router-dom";
import BarraDeNavegacion from "componentes/BarraDeNavegacion";
// import Footer from "./components/Footer.js";

const CapaFija = () => {
  return (
    <>
      <BarraDeNavegacion />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default CapaFija;
