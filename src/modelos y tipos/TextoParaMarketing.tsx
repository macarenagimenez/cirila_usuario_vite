type Textos = {
  texto: JSX.Element;
  className?: string;
};

let TextoParaMarketing: Textos[] = [
  {
    texto: <p>"Objetos únicos hechos a mano. "</p>,
  },
  {
    texto: (
      <p>"Peli 📺 + mantita favorita 🛋 + comida rica 🍝 = el mejor plan."</p>
    ),
  },
  { texto: <p> "SOMOS EL MEJOR REGALO"</p> },
];

export { TextoParaMarketing };
export type { Textos };
