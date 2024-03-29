import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapaFija from "componentes/CapaFija";
import Bienvenida from "paginas/Bienvenida";
import PaginaDeProductos from "paginas/PaginaDeProductos";
import ProductoSeleccionado from "paginas/ProductoSeleccionado";
import Carrito from "paginas/Carrito";
import { CarritoProvider } from "contexts/CarritoContexto.jsx";
import CargaDeDatos from "paginas/CargaDeDatos";
import { UsuarioProvider } from "contexts/UsuarioContexto";
import FinalOrdenDeCompra from "paginas/FinalOrdenDeCompra";
import QuienesSomos from "paginas/QuienesSomos";
import CompraFinalizada from "paginas/CompraFinalizada";
import ScrollToTop from "hooks/scrollToTop";
import ErrorGuardadoCarrito from "componentes/ErrorGuardadoCarrito";
import { CategoriaProvider } from "contexts/CategoriaContexto";

function App() {
  //TODO refactorizar
  return (
    <>
      <CategoriaProvider>
      <CarritoProvider>
        <UsuarioProvider>
          <BrowserRouter>
            {" "}
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<CapaFija />}>
                <Route index element={<Bienvenida />} />
                <Route path="productos" element={<PaginaDeProductos />} />
                <Route path="quienesSomos" element={<QuienesSomos />} />
                <Route path="producto" element={<ProductoSeleccionado />} />
                <Route path="carritoDeCompras" element={<Carrito />} />
                <Route path="cargaDeDatos" element={<CargaDeDatos />} />
                <Route
                  path="resumenOrdenDeCompra"
                  element={<FinalOrdenDeCompra />}
                />
                <Route path="despedida" element={<CompraFinalizada />} />
                <Route path="errorEnCompra" element={<ErrorGuardadoCarrito />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UsuarioProvider>
      </CarritoProvider>
      </CategoriaProvider>
      </>
  );
}

export default App;
