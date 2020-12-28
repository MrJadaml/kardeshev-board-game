const DiscardPile = ({ cards, name }) => {
  return (
    <div className="discard-pile">
      <div> {cards.length} cards</div>
      <div> [ pile ] </div>
      <div>{name} Discard Pile</div>

      <div>
        <button onClick={() => {}}>Shuffle</button>
        <button onClick={() => {}}>Peek</button>
      </div>

      <br />
    </div>
  );
}


export default DiscardPile;
