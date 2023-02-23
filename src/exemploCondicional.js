function Exemplo(props) {
  const { isCode, developer } = props;

  /* return <h1>{isCode ? "Brenno, você é o cara!" : "Brenno, vá estudar mais!"}</h1>;*/

  /*return (
<h1>{isCode && <p>"Brenno, você é o cara!"</p>}</h1>
  )*/

  return (
    <h1>{isCode && developer === "Full-Stack" && <p>"Brenno, você é o cara!"</p>}</h1>
      )
}

export default Exemplo;
