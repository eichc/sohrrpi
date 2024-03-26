import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
      <div className={styles.headcontainer}>
        <div className={styles.headflex}>
          <Link href="../" className={styles.head}>
            Home
          </Link>
          <Link href="../CourseHome" className={styles.head}>
            Courses
          </Link>
          <Link href="../AllCourses" className={styles.head}>
            All Courses
          </Link>
          <Link href="/api/auth/signin?callbackUrl=/" className={styles.head}>
            Login
          </Link>
        </div>
      </div>
    );
  }
