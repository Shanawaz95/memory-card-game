import React, { useState, useEffect } from "react";
import { ReactComponent as Joker1 } from "../../images/joker1.svg";
import { ReactComponent as Joker2 } from "../../images/joker2.svg";
import { ReactComponent as Himg1 } from "../../images/hiddenImage1.svg";
import { ReactComponent as Himg2 } from "../../images/hiddenImage2.svg";
import "./card.css";

function Card(props) {
  const {
    click1,
    click2,
    setClick1,
    setClick2,
    setClickedCount,
    clickedCount,
  } = props.props;

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

  const cardIMG = [<Himg1></Himg1>, <Himg2></Himg2>];

  function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
      const rand = Math.floor(Math.random() * i + 1);
      let temp = list[i];
      list[i] = list[rand];
      list[rand] = temp;
    }
    return list;
  }

  function cardList() {
    let cardProps = [1, 2].reduce((arr, type) => {
      let cardClass = "img" + type;
      arr.push({ comp: cardIMG[type - 1], cardClass });
      arr.push({ comp: cardIMG[type - 1], cardClass });
      return arr;
    }, []);
    return shuffle(cardProps);
  }

  useEffect(() => {
    setCards(cardList());
  }, []);

  function handleClick(e) {
    e.target.style.display = "none";

    setClickedCount(clickedCount + 1);

    if (click1.clicked) {
      setClick2({
        target: e.target,
        clicked: true,
        class: e.target.parentNode.children[1].className,
      });
    } else if (click2.clicked) {
      setClick1({
        target: e.target,
        clicked: true,
        class: e.target.parentNode.children[1].className,
      });
    } else {
      setClick1({
        target: e.target,
        clicked: true,
        class: e.target.parentNode.children[1].className,
      });
    }
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        {cards.map((val, id) => {
          return (
            <div key={id} className="col">
              <div className="holder">
                {cardDesign[0]}
                <div className="cardIMG" className={val.cardClass}>
                  {val.comp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
