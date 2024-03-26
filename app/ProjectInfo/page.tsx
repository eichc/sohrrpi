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
        <div className={styles.title}>
          Project Info
        </div>
        <div className={styles.underline}></div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}