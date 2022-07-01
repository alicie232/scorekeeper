import styled from "styled-components";

export default function Form() {
  return (
    <>
      <AddPlayer>
        <label>Name of player</label>
        <input type="text"></input>
        <button type="button">Add player</button>
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
