import Card from '../cards/card/';

const CardRiver = ({ cards, name }) => {
  return (
    <div className="card-river">
      <div>{name} Card River</div>

      {cards.map(card =>
        <Card data={card} />
      )}
      <h4>[] [] [] [] []</h4>

      <br />
    </div>
  );
}


export default CardRiver;
