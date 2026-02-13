import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.logo} text-gradient`}>AM.</div>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Alaguthiraviyam Murugan. All rights reserved. Built with Next.js.
                </div>
                <div className={styles.links}>
                    <a href="https://github.com/thiraviyam55" target="_blank" rel="noopener noreferrer" className={styles.link}>Github</a>
                    <a href="https://www.linkedin.com/in/alaguthiraviyam-m-9ab16b295/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
