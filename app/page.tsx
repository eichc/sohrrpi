import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/sidebar";
import Footer from "@/components/Footer/footer"

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}