import { useState } from "react";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";
export default function CargaDeDatos() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("hola");
  };

  return (
    <>
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <form onSubmit={handleSubmit}>
        <label>
          Nombre y Apellido
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <p>Nombre y Apellido: {inputValue}</p>
        <button type="submit">Listo</button>
      </form>
      <label>
        ¿Como te gustaría pagar?
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Transferencia 15% OFF</option>
          <option value="option2">Tarjeta de crédito</option>
          <option value="option3" disabled={true}>
            Con amor 🤣
          </option>
        </select>
      </label>
      <form>
        <label htmlFor="color">
          <input
            type="checkbox"
            name="color"
            checked={isChecked}
            onChange={handleCheck}
          />
          ¿Es para regalar?
        </label>

        {isChecked && <div>Será armado para regalo! 🎁</div>}
      </form>
    </>
  );
}
