import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";

export default function Form({ onCreateUser }) {
  const [player, setPlayer] = useState("");
  function handleOnChange(event) {
    setPlayer(event.target.value);
  }

  return (
    <>
      <AddPlayer
        onSubmit={(event) => {
          event.preventDefault();
          // console.log({ player, id: nanoid() });

          onCreateUser({ name: player, id: nanoid(), score: 0 });
          setPlayer("");
        }}
      >
        <label>
          Name of player
          <input type="text" value={player} onChange={handleOnChange}></input>
        </label>
        <button>Add player</button>
      </AddPlayer>
    </>
  );
}

const AddPlayer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 20vh;
`;
