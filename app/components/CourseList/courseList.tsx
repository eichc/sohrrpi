import styles from "./courselist.module.css";
import Link from "next/link";

interface Props {
  items: string[];
}

export default function CourseList({items}: Props) {
  return (
    <ul className={styles.ul}>
      {items.map((item, index) => (
        <li 
          className={styles.listitem} 
          key={item}
        >
          <Link href="../CourseHome" className={styles.itembtn}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}