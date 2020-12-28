const Deck = ({ cards, name, handleDraw }) => {
  return (
    <div className="deck">
      <div> X cards left</div>
      <div> [ deck ] </div>
      <div>{name} Deck</div>

      <div>
        <button onClick={handleDraw}>Draw 1</button>
        <button onClick={handleDraw}>Draw 3</button>
        <button onClick={() => {}}>Peek</button>
      </div>

      <br />
    </div>
  );
}


export default Deck;
