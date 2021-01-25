import styles from './ResearchAccord.module.css';

const ResearchAccord = () => {
  return (
    <div className={styles.researchAccord}>
      <div>Research Accord</div>

      <div className={styles.track}>
        <div className={styles.slot}>
          <div>8</div>
          <div>worker</div>
        </div>
        <div className={styles.slot}>
          <div>5</div>
          <div>worker</div>
        </div>
        <div className={styles.slot}>
          <div>3</div>
          <div>worker</div>
        </div>
        <div className={styles.slot}>
          <div>2</div>
          <div>worker</div>
        </div>
        <div className={styles.slot}>
          <div>1</div>
          <div>worker</div>
        </div>
        <div className={styles.slot}>
          <div>1</div>
          <div>worker</div>
        </div>
      </div>
    </div>
  );
}

export default ResearchAccord;
