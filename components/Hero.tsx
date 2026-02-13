import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>

            <div className="animate-fadeIn">
                <span className={styles.badge}>
                    Software Engineer | 5 Years Experience
                </span>
                <h1 className={styles.title}>
                    I'm Alaguthiraviyam <br />
                    <span className="text-gradient">Murugan_</span>
                </h1>
                <p className={styles.description}>
                    Specializing in architecting robust backend systems with PHP Laravel and Node.js. I build scalable applications powered by optimized MySQL, PostgreSQL, MSSQL and NoSQL databases.
                </p>
                <div className={styles.cta}>
                    <a href="#projects" className={styles.primaryBtn}>
                        View My Work
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </a>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
            </div>
        </section>
    );
}
