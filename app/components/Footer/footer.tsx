import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href="https://github.com/eichc/sohrrpi" className={styles.blackbtn}>
              Github link
            </Link> 
            <span className="footer-separator"> | </span>
            <Link href="../ProjectInfo" className={styles.blackbtn}>
              Project info
            </Link>
            <span className="footer-separator"> | </span>
            <Link href="../AboutUs" className={styles.blackbtn}>
              About Us
            </Link>
            <span className="footer-separator"> | </span>
            <Link href="https://new.rcos.io/" className={styles.blackbtn}>
              An RCOS project
              </Link>
            <p className={styles.blackbtn}>Made by Cam Eich, Satyam Patel, and Emmanuel Usman</p>
        </div>

    )
}