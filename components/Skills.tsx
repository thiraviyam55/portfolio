"use client";

import {
    Code2,
    Layers,
    Database,
    Globe,
    Cpu,
    CreditCard,
    Terminal,
    Workflow,
    ShieldCheck,
    Zap
} from "lucide-react";
import styles from "./Skills.module.css";

const SKILLS = [
    {
        name: "PHP Laravel / Yii2",
        level: 95,
        icon: <Code2 size={20} />,
        color: "#ff2d20"
    },
    {
        name: "Node.js / Express / NestJS",
        level: 92,
        icon: <Zap size={20} />,
        color: "#68a063"
    },
    {
        name: "MySQL / PostgreSQL / MSSQL",
        level: 90,
        icon: <Database size={20} />,
        color: "#00758f"
    },
    {
        name: "MongoDB / Redis / Blockchain",
        level: 85,
        icon: <Layers size={20} />,
        color: "#47a248"
    },
    {
        name: "React.js / Next.js / TypeScript",
        level: 88,
        icon: <Globe size={20} />,
        color: "#61dbfb"
    },
    {
        name: "Payment Gateway Integration",
        level: 94,
        icon: <CreditCard size={20} />,
        color: "#7c3aed"
    },
];

const TOOLS = [
    { name: "Jira", icon: <Workflow size={14} /> },
    { name: "GitHub", icon: <Terminal size={14} /> },
    { name: "Postman", icon: <Globe size={14} /> },
    { name: "SonarQube", icon: <ShieldCheck size={14} /> },
    { name: "Docker", icon: <Cpu size={14} /> },
    { name: "Jenkins", icon: <Zap size={14} /> }
];

const GATEWAYS = ["Razorpay", "PhonePe", "PayPal", "Instamojo"];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Abilities</span>
                    <h2 className={styles.title}>Supercharged Tech Stack</h2>
                    <p className={styles.desc}>
                        From architecting complex ERPs to securing high-volume transactions, my expertise spans the entire development lifecycle. I specialize in backend robustness and seamless third-party integrations.
                    </p>

                    <div className={styles.toolSection}>
                        <h3 className={styles.smallHeading}>Tools & Workflow</h3>
                        <div className={styles.tags}>
                            {TOOLS.map((tool) => (
                                <span key={tool.name} className={styles.tag}>
                                    <span className={styles.tagIcon}>{tool.icon}</span>
                                    {tool.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.gatewaySection}>
                        <h3 className={styles.smallHeading}>Payment Expertise</h3>
                        <div className={styles.tags}>
                            {GATEWAYS.map((gw) => (
                                <span key={gw} className={styles.tag} style={{ borderColor: "rgba(16, 185, 129, 0.3)" }}>
                                    <CreditCard size={12} className={styles.tagIcon} />
                                    {gw}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.skillList}>
                    {SKILLS.map((skill) => (
                        <div key={skill.name} className={styles.skillItem}>
                            <div className={styles.skillInfo}>
                                <div className={styles.skillNameWrapper}>
                                    <span className={styles.skillIcon} style={{ color: skill.color }}>{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                                <span className={styles.skillPercent}>{skill.level}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(to right, ${skill.color}, var(--primary))`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
