import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
      <div className={styles.headcontainer}>
        <div className={styles.headflex}>
          <Link href="/LandingPage" className={styles.head}>
            Home
          </Link>
          <Link href="../pages/CourseHome/courseHome" className={styles.head}>
            Courses
          </Link>
          <Link href="" className={styles.head}>
            About Us
          </Link>
          <Link href="/api/auth/signin?callbackUrl=/" className={styles.head}>
            Login
          </Link>
        </div>
      </div>
    );
  }
