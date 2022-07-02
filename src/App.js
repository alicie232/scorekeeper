import styled from "styled-components";
import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";
import History from "./components/History/History.js";
import Form from "./components/Form/Form.js";
import { initialPreviousGames } from "./historyDB.js";

const players = [
  {
    name: "John",
    score: 15,
    id: "1",
  },
  {
    name: "Jane",
    score: 15,
    id: "2",
  },
  {
    name: "Jim",
    score: 15,
    id: "3",
  },
];

function App() {
  return (
    <>
      <header>
        <h1>Game</h1>
      </header>
      <Main>
        {players.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
        <Button background={"red"}>End game</Button>
        <Form />
        <h2>Previous Games</h2>
        {initialPreviousGames.map((game) => {
          return <History key={game.id} game={game} />;
        })}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: grid;
  gap: 10px;
`;
export default App;
