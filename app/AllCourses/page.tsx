import styles from "./allcourses.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import CourseList from "../components/CourseList/courseList";


export default function AllCourses() {
  let courses = ["CSCI 1100", "MATH 1010", "CSCI 1200", "MATH 2010", "BIOL 1010", "ECON 2010"];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.courseContainer}>
        <div className={styles.title}>
          All Courses
        </div>
        <div className={styles.underline}></div>
        <CourseList items={courses} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
