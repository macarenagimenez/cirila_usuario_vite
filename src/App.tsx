import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapaFija from "componentes/CapaFija";
import Bienvenida from "paginas/Bienvenida";
import PaginaDeProductos from "paginas/PaginaDeProductos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CapaFija />}>
            <Route index element={<Bienvenida />} />
            <Route path="productos" element={<PaginaDeProductos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
