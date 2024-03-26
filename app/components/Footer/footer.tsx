import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/eichc/sohrrpi" className={styles.blackbtn} target="_blank">Github link</a> 
            <span className="footer-separator"> | </span>
            <a href="" className={styles.blackbtn} target="_blank">Project info</a>
            <span className="footer-separator"> | </span>
            <a href="" className = "black-btn" target="_blank">Contact Us</a>
            <span className="footer-separator"> | </span>
            <a href="https://new.rcos.io/" className={styles.blackbtn} target="_blank">An RCOS project</a>
            <p className={styles.blackbtn}>Made by Cam Eich, Satyam Patel, and Emmanuel Usman</p>
        </div>

    )
}