import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapaFija from "componentes/CapaFija";
import Bienvenida from "paginas/Bienvenida";
import PaginaDeProductos from "paginas/PaginaDeProductos";
import ProductoSeleccionado from "paginas/ProductoSeleccionado";
import Carrito from "paginas/Carrito";
import { CarritoProvider } from "contexts/CarritoContexto.jsx";

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CapaFija />}>
            <Route index element={<Bienvenida />} />
            <Route path="productos" element={<PaginaDeProductos />} />
            <Route path="producto" element={<ProductoSeleccionado />} />
            <Route path="carritoDeCompras" element={<Carrito />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
