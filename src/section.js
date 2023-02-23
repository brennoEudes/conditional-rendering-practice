import CardImage from "./cardImage";
import Button from "./button";
import TextBlock from "./textBlock";
import { useState } from "react";
import images from "./images/img1.jpeg"

function Section() {

const [img, setImg] = useState(images);
const [text, setText] = useState("lorem ipsum");

  return (
    <div>
      <CardImage srcImg={img} />
      <Button setText={setText} setImg={setImg}/>
      <TextBlock>{text}</TextBlock>
    </div>
  );
}

export default Section;
