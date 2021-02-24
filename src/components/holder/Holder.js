import React, { useState, useEffect } from "react";
import Card from "../card/Card";

let mounted = false;
function Holder(props) {
  const [click1, setClick1] = useState({
    clicked: false,
    class: null,
  });
  const [click2, setClick2] = useState({
    clicked: false,
    class: null,
  });
  const [result, setResult] = useState(0);
  const [clickedCount, setClickedCount] = useState(0);

  function scoreCount() {
    let score =
      click1.clicked && click2.clicked && click1.class === click2.class
        ? result + 1
        : result;

    return score;
  }

  useEffect(() => {
    setResult(scoreCount());
  }, [click2]);

  useEffect(() => {
    if (click1.class != click2.class && mounted) {
      click1.target.style.display = "block";
      click2.target.style.display = "block";
    } else {
      mounted = true;
    }

    reset();
  }, [result]);

  function reset() {
    if (clickedCount == 2) {
      setClick1({
        clicked: false,
        class: "",
      });

      setClick2({
        clicked: false,
        class: "",
      });
    }
  }

  console.log("click1", click1);
  console.log("click2", click2);

  return (
    <>
      <Card
        props={{
          click1: click1,
          click2: click2,
          setClick1: setClick1,
          setClick2: setClick2,
          setClickedCount: setClickedCount,
          clickedCount: clickedCount,
        }}
      ></Card>

      <h3>{result}</h3>
    </>
  );
}

export default Holder;
