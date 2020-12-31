import styles from './FactionBoard.module.css';

const FactionBoard = () => {
  return (
    <div className={styles.Board}>
      <ul className={styles.grid}>

        <li className={styles.row3, styles.push1}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row3, styles.push1}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row3, styles.push1}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row3, styles.push1}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row4}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row3, styles.push1}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row3}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row2, styles.push2}>
            <div className={styles.hex}></div>
        </li>
        <li className={styles.row2}>
            <div className={styles.hex}></div>
        </li>

        <li className={styles.row1}>
            <div className={styles.hex}></div>
        </li>
      </ul>
    </div>
  );
}

export default FactionBoard;
