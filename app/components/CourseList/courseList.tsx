import styles from "./courselist.module.css";

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
          {item}
        </li>
      ))}
    </ul>
  );
}