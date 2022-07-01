export default function Player({ name, score }) {
  return (
    <section>
      {name}
      <button type="button" aria-label="Decrease score">
        -
      </button>
      <span>{score}</span>
      <button type="button" aria-label="Increase score">
        +
      </button>
    </section>
  );
}
