import Image from "next/image";
import styles from "./feature.module.css";

const Feature = ({ id, title, desc, icon, color }) => {
  return (
    <div
      className={styles.card}
      style={{ borderColor: `var(--${color})` }}
      id={id}
    >
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDesc}>{desc}</p>
      <Image
        src={`/images/${icon}`}
        alt={`${title} icon`}
        className={styles.cardIcon}
        width={80}
        height={80}
      />
    </div>
  );
};

export default Feature;
