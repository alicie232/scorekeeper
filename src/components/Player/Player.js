import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Player({ name, score }) {
  const initialState = () => Number(window.localStorage.getItem("count"));
  const [count, setCount] = useState(initialState);

  function handleDecrementScore() {
    setCount(count - 1);
  }

  function handleIncrementScore() {
    setCount(count + 1);
  }

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <PlayerWrapper>
      {name}
      <PlayerScore>
        <Button
          type="button"
          aria-label="Decrease score"
          onClick={handleDecrementScore}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          type="button"
          aria-label="Increase score"
          onClick={handleIncrementScore}
        >
          +
        </Button>
      </PlayerScore>
    </PlayerWrapper>
  );
}

const Button = styled.button`
  background-color: cadetblue;
  border-radius: 10px;
  padding: 0 10px;
`;

const PlayerScore = styled.div`
  color: black;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
