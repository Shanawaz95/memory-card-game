import React, { useState } from "react";
import Card from "../card/Card";

function Holder(props) {
  const [click1, setClick1] = useState({ clicked: false, class: null });
  const [click2, setClick2] = useState({ clicked: false, class: null });
  // const [result, setResult] = useState({ match: false, score: 0 });
  let score = 0;

  score =
    click1.clicked && click2.clicked && click1.class === click2.class
      ? score + 1
      : score;

  console.log(score);

  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col">
          <Card
            props={{
              click1: click1,
              click2: click2,
              setClick1: setClick1,
              setClick2: setClick2,
            }}
          ></Card>
        </div>

        <div className="col">
          <Card
            props={{
              click1: click1,
              click2: click2,
              setClick1: setClick1,
              setClick2: setClick2,
            }}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Holder;
