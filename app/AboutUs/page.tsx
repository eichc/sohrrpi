import styles from "./aboutus.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Bio from "../components/Bio/bio";

export default function AboutUs() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>About Us</div>
        <div className={styles.underline}></div>
        <div className={styles.bioContainer}>
          <Bio
            name="Cam Eich"
            major="Computer Science"
            year="2026"
            email="eichc@rpi.edu"
            role="Project Lead"
            description="Description."
          />
          <Bio
            name="Satyam Patel"
            major="Computer Science"
            year="2026"
            email="patels23@rpi.edu"
            role="Full-Stack Developer"
            description="Description."
          />
          <Bio
            name="Emmanuel Usman"
            major="Computer Science"
            year="2026"
            email="usmane@rpi.edu"
            role="Full-Stack Developer"
            description="Description."
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
