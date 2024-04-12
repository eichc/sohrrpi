import styles from "./courselist.module.css";
import { Link } from 'react-router-dom';
import { Event, CalendarEvent } from '../components/Course/course'

interface Props {
  items: string[];
}

export default function CourseList({ items }: Props) {

  function handleButtonClick(item: string) {
    <Link to={{
      pathname: "/page.tsx",
      state: { events: events },
    }}>{item}</Link>
  }

  return (
    <ul className={styles.ul}>
      {items.map((item, index) => (
        <button
          className={styles.button} 
          key={item}
          onClick={() => handleButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </ul>
  );
}