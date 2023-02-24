import "./App.css";
import Exemplo from "../src/exemploCondicional";
import CompTexto from "./compTexto";
import CompButton from "./compButton";
import { useState } from "react";
import Section from "./section";
import movies from "./movies";
import Card from "./card";

function App() {
  const [text, setText] = useState("Bom dia!");

  return (
    <div className="App">
      {/* <Exemplo isCode={true} developer="Full-Stack" />
      <CompTexto text={text} />
      <CompButton setText={setText} /> */}

      <Section />
      {movies.map((currentMovies) => {
        return (
          <Card
            title={currentMovies.original_title}
            text={currentMovies.overview}
            CTA="Clique Aqui!"
          />
        );
      })}
    </div>
  );
}

export default App;
