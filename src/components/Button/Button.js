import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background === "red" ? "red" : "independence"};
  border-radius: 5px;
  width: 100%;
`;
