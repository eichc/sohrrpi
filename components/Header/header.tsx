import styles from "./header.module.css";

export default function Header() {
    return (
      <div className={styles.headcontainer}>
        <div className={styles.headflex}>
          <a href="../app/page.tsx" className={styles.head}>
            Home
          </a>
          <a href="../pages/CourseHome/courseHome.tsx" className={styles.head}>
            Courses
          </a>
          <a href="../pages/Login/login.tsx" className={styles.head}>
            Login
          </a>
          <a href="#footer" className={styles.head}>
            About Us
          </a>
          
        </div>
      </div>
    );
  }
