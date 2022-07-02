import styled from "styled-components";

export default function History({ game }) {
  return (
    <section>
      <h3>Game</h3>
      <ul>
        {game.players.map((player) => (
          <ListItem key={player.id}>
            <span>{player.name}</span>
            <span>{player.score}</span>
          </ListItem>
        ))}
      </ul>
    </section>
  );
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
`;
