import "./App.css";
import Exemplo from "../src/exemploCondicional";
import CompTexto from "./compTexto";
import CompButton from "./compButton";
import { useState } from "react";

function App() {

  const [text, setText] = useState("Bom dia!");

  return (
    <div className="App">
      <Exemplo isCode={true} developer="Full-Stack" />
      <CompTexto text={text} />
      <CompButton setText={setText}/>
    </div>
  );
}

export default App;
