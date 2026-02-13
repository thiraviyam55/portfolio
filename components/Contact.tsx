"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <span className={styles.label}>Get in touch</span>
                <h2 className={styles.title}>Let's build something <span className="text-gradient">epic_</span></h2>

                <div className={styles.card}>
                    <div className={styles.info}>
                        <h3 style={{ fontSize: "24px", marginBottom: "24px", fontWeight: "bold" }}>Contact Information</h3>
                        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px", lineHeight: "1.6" }}>
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
                        </p>
                        <ul className={styles.socialList}>
                            <li className={styles.socialItem}>
                                <div className={styles.socialIcon}>@</div>
                                <a href="mailto:alaguthiraviyamofficial@gmail.com" className="hover:text-primary transition-colors">
                                    alaguthiraviyamofficial@gmail.com
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <div className={styles.socialIcon}>L</div>
                                <a href="https://www.linkedin.com/in/alaguthiraviyam-m-9ab16b295/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    linkedin.com/in/alaguthiraviyam-m
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <div className={styles.socialIcon}>G</div>
                                <a href="https://github.com/thiraviyam55" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    github.com/thiraviyam55
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                        ></textarea>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={styles.submitBtn}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                opacity: status === "loading" ? 0.7 : 1,
                                cursor: status === "loading" ? "not-allowed" : "pointer"
                            }}
                        >
                            {status === "loading" ? (
                                <>Processing...</>
                            ) : status === "success" ? (
                                <><CheckCircle size={20} /> Sent Successfully!</>
                            ) : status === "error" ? (
                                <><AlertCircle size={20} /> Try Again</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>

                        {status === "error" && (
                            <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "12px", textAlign: "center" }}>
                                {errorMessage}
                            </p>
                        )}
                        {status === "success" && (
                            <p style={{ color: "#10b981", fontSize: "14px", marginTop: "12px", textAlign: "center" }}>
                                Message received! I'll get back to you shortly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
