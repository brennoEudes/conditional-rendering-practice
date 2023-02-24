import CardImage from "./cardImage";
import Button from "./button";
import TextBlock from "./textBlock";
import { useState } from "react";
import cat1 from "./images/img1.jpeg";
import cat2 from "./images/img2.jpg";

function Section() {

const [img, setImg] = useState(cat1);
const [text, setText] = useState("Lorem ipsum");

function handleAttStates () {
  setImg(cat2);
  setText("Mudei o gatinho!");
}

  return (
    <div>
      <CardImage srcImg={img} />
      <Button attStates={handleAttStates}/>
      <TextBlock>{text}</TextBlock>
    </div>
  );
}

export default Section;
