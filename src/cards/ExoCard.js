import styles from './ExoCard.module.css';

export const ExoCard = ({ data }) => {
  const {
    cost,
    name,
    id,
    imageUrl,
    discoveries,
    description,
    flavorText,
    cardType,
  } = data;

  return (
    <div className={styles.exoCard}>
      <div className={styles.startSplit}>
        <header className={styles.header}>
          <div className={styles.cost}>{cost}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.id}>{id}</div>
        </header>

        <img
          className={styles.image}
          src={imageUrl}
          alt="exoplanet"
          width="250"
        />

        <div className={styles.discoveries}>
          {discoveries.map(faction => (
            <span>{faction}</span>
          ))}
        </div>
      </div>
      <div className={styles.endSplit}>
        <div className={styles.description}>{description}</div>

        <p>----------------</p>

        <div className={styles.flavorText}>{flavorText}</div>
      </div>
      <footer>
        <div className={styles.cardType}>{cardType}</div>
      </footer>
    </div>
  );
};
