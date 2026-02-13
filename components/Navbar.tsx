"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}>
            <div className={`${styles.container} ${isScrolled ? styles.containerScrolled : ""}`}>
                <Link href="/" className={`${styles.logo} text-gradient`}>
                    AM.
                </Link>
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <a href="/ALAGUTHIRAVIYAM_2026.pdf" download className={styles.link} style={{ color: "var(--primary)", fontWeight: "bold" }}>Resume</a>
                </div>
            </div>
        </nav>
    );
}
