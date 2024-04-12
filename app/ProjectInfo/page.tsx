import styles from "./projectinfo.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";


export default function AboutUs() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Project Info</div>
        <div className={styles.underline}></div>
        <div className={styles.description}>
          Currently, finding the office hours for all of your classes at RPI is a painful process. No two professors use 
          the same system, and so SOHR is a service that plans to fix that. Professors and TAs input the office hours 
          for their classes, and students are able to look up their classes all in one place. This is a project was newly created
          in RCOS in the Spring '24 semester, so it is very much a work in progress. This is our first time taking RCOS and 
          we all have limited web development experience, so this project is very beginner-friendly.
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}