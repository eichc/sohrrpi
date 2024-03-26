import styles from "./bio.module.css";

interface Props {
  name: string;
  major: string;
  year: string;
  email: string;
  role: string;
  description: string;
}

export default function Bio({name, major, year, email, role, description}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.role}>
        {role}
      </div>
      <div className={styles.info}>
        Major: {major}
      </div>
      <div className={styles.info}>
        Graduation Year: {year}
      </div>
      <div className={styles.info}>
        Email: {email}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
}