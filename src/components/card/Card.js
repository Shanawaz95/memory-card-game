import React, { useState, useEffect } from "react";
import { ReactComponent as Joker1 } from "../../images/joker1.svg";
import { ReactComponent as Joker2 } from "../../images/joker2.svg";
import { ReactComponent as Himg1 } from "../../images/hiddenImage1.svg";
import { ReactComponent as Himg2 } from "../../images/hiddenImage2.svg";
import "./card.css";

function Card(props) {
  const { click1, click2, setClick1, setClick2 } = props.props;

  const [cards, setCards] = useState([]);
  const cardDesign = [
    <Joker1
      className="cardBG"
      onClick={handleClick}
      style={{ backgroundColor: "red" }}
    ></Joker1>,
    <Joker2
      className="cardBG"
      onClick={handleClick}
      style={{ backgroundColor: "red" }}
    ></Joker2>,
  ];

  const cardIMG = [
    <Himg1 className="img1"></Himg1>,
    <Himg2 className="img2"></Himg2>,
  ];

  let randomCardDesign = Math.floor(Math.random() * 2);
  let randomCardIMG = Math.floor(Math.random() * 2);

  function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
      const rand = Math.floor(Math.random() * i + 1);
      let temp = list[i];
      list[i] = list[rand];
      list[rand] = temp;
    }
    return list;
  }

  console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));

  useEffect(() => {}, []);

  function handleClick(e) {
    e.target.style.display = "none";
    click1.clicked
      ? setClick2({
          ...click2,
          clicked: true,
          class: e.target.parentNode.children[1].children[0].className.baseVal,
        })
      : setClick1({
          ...click1,
          clicked: true,
          class: e.target.parentNode.children[1].children[0].className.baseVal,
        });
  }

  return (
    <div className="holder">
      {cardDesign[randomCardDesign]}
      <div className="cardIMG">{cardIMG[randomCardIMG]}</div>
    </div>
  );
}

export default Card;
