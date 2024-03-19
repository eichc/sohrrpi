import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import LandingPage from "@/pages/LandingPage/landingPage";
import AddCourse from "@/pages/AddCourse/AddCourse";

export default function Page() {
  return (
    <div>
      <div className={styles.page}>
        <Header />
      </div>
      <LandingPage />

      <div className={styles.footer}>
        <Footer />
      </div>
  </div>
  );
}