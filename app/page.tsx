import styles from "./page.module.css";
import Header from "@/components/Header/header";

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  )
}