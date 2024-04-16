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
            year="26"
            email="eichc@rpi.edu"
            role="Project Lead"
            description="I am a sophomore computer science student here at RPI. I'm from Wilmington, MA (about 30 minutes north of Boston) 
            and I attended St. John's Prep High School. I'm currently interested in pursuing a career in either data science or artificial 
            intelligence."
          />
          <Bio
            name="Satyam Patel"
            major="Computer Science"
            year="26"
            email="patels23@rpi.edu"
            role="Full-Stack Developer"
            description="I am a sophomore Computer Science / Information Technology and Web Science dual major student at RPI. I'm from Utica, NY and I attended Shaker High School.
            I'm pursuing a career in Artifical Intelligence."
          />
          <Bio
            name="Emmanuel Usman"
            major="Computer Science and ITWS"
            year="26"
            email="usmane@rpi.edu"
            role="Full-Stack Developer"
            description="I am currently a sophmore Computer Science / Information Technology and Web Science dual major student at RPI. I'm from Queens, NY. My hobbies are playing tennis, boxing, and coding. I am an identical twin."
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
