import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Login from "@/pages/Login/login"
export default function Page() {
  return (
    <div>
      <div className={styles.page}>
        <Header />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <Login />
  </div>
  )
}