import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Sidebar />
    </div>
  )
}