import { useState } from "react";

function MinMax(props) {
  if (props.Score === 0) return <span id="score">MIN</span>;
  if (props.Score === 10) return <span id="score">MAX</span>;
  return <span id="score">{props.Score}</span>;
}

function Vote() {
  const [Score, setScore] = useState(0);
  function increase() {
    setScore((score) => {
      if (score < 10) return score + 1;
      else window.alert("Cannot Vote more");
      return score;
    });
  }
  function decrease() {
    setScore((score) => {
      if (score > 0) return score - 1;
      else window.alert("Cannot unvote");
      return score;
    });
  }
  return (
    <div className="button">
      <button id="vote" onClick={increase}>
        Click to Vote
      </button>
      <MinMax Score={Score} />
      <button id="unvote" onClick={decrease}>
        Click to Unvote
      </button>
    </div>
  );
}

export default Vote;
