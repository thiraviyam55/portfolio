import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageSide}>
                    <div className={styles.imageGlass}>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                            alt="Alaguthiraviyam Murugan"
                            className={styles.profileImg}
                        />
                    </div>
                </div>
                <div className={styles.textSide}>
                    <span className={styles.label}>About Me</span>
                    <h2 className={styles.title}>Full Stack Developer <br /> <span className="text-gradient">driven by innovation.</span></h2>
                    <p className={styles.desc}>
                        I am Alaguthiraviyam Murugan, a seasoned Full Stack Engineer with 5+ years of experience specializing in high-scale enterprise applications like ERP, CRM, and Blockchain systems.
                    </p>
                    <p className={styles.desc}>
                        My expertise covers the PHP (Laravel/Yii2) and Node.js ecosystems (**Express.js**, **NestJS**), alongside **React.js** and **Next.js**. I specialize in secure integrations with **Razorpay**, **PhonePe**, **PayPal**, and **Instamojo**.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>05+</span>
                            <span className={styles.statLabel}>Years Exp.</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Projects Done</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
