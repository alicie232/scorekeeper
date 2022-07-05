import Player from "../components/Player/Player.js";
import Button from "../components/Button/Button.js";
import Form from "../components/Form/Form.js";

export default function HomePage({ users, onCreateNewGame }) {
  return (
    <>
      {users.map((player) => (
        <Player key={player.id} name={player.name} score={player.score} />
      ))}
      <Button background={"red"}>End game</Button>
      <Form onCreateUser={onCreateNewGame} />
    </>
  );
}
