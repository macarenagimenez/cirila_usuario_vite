import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapaFija from "componentes/CapaFija";
import Bienvenida from "paginas/Bienvenida";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CapaFija />}>
            <Route index element={<Bienvenida />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
