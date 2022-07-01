import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";

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
      <heading>
        <h1>Game</h1>
      </heading>
      <main>
        {players.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
        <Button background={"red"}>End game</Button>
      </main>
    </>
  );
}

export default App;
