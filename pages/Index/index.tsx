import styles from "./index.module.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Login from '@/components/Login/login';

export default function Index() {
  return (
    <div>
      <div className={styles.page}>
        <Header />
      </div>
      <div className={styles.container}>
        <Login />
        <button className={styles.guestbtn}>Continue as Guest</button>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
  </div>
  );
}