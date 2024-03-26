import styles from "./sidebarList.module.css";

interface Props {
  items: string[];
}

export default function sidebarList({items}: Props) {
  return (
    <ul className={styles.sidebarList}>
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