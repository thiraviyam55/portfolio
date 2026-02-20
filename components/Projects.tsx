import styles from "./Projects.module.css";

const FEATURED_PROJECTS = [
    {
        title: "Manjushree India ERP",
        category: "PHP Laravel / MySQL",
        description: "Large-scale Enterprise Resource Planning software for industrial management, focusing on process optimization and manufacturing automation.",
        link: "https://www.manjushreeindia.com/",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Pro-Inspector CRM",
        category: "Node.js / Medusa.js / PostgreSQL",
        description: "Comprehensive inspection and CRM platform built with headless architecture for high scalability and enterprise data integrity.",
        link: "https://pro-inspector.net/",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    },
    {
        title: "ABFRL ERP Suite",
        category: "PHP Laravel / MSSQL",
        description: "Enterprise ERP for Aditya Birla Fashion, featuring complex data management and multi-service API integrations for retail operations.",
        link: "https://www.abfrl.com/",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    }
];

const OTHER_PROJECTS = [
    {
        title: "Sapphire Foods Ticketing",
        category: "Laravel API / MSSQL",
        description: "Level-based ticket management system for handling high-volume support requests.",
        link: "https://sapphirefoods.in/",
    },
    {
        title: "IJSREM Journal System",
        category: "Next.js / Node.js",
        description: "Academic research publishing platform with peer-review workflows.",
        link: "https://ijsrem-dev.vercel.app/",
    },
    {
        title: "IKEA Profile Manager",
        category: "PHP Laravel",
        description: "Secure profile and authentication management system for retail customers.",
        link: "https://www.ikea.com/in/en/profile/login/",
    },
    {
        title: "Nexdro Drone Network",
        category: "Next.js / MongoDB",
        description: "Social network for drone pilots featuring flight portfolios.",
        link: "https://nexdro.in/",
    },
    {
        title: "We Drive Global",
        category: "Laravel / MySQL",
        description: "Social Platforms of booking cab and taxi services across the globe with secure payment gateway integration.",
        link: "https://www.wedriveglobal.com/",
    },
    {
        title: "Permier Agile",
        category: "Laravel / MySQL",
        description: "Course Management System for online learning with multi-tier user roles and content delivery.",
        link: "https://www.permieragile.com/",
    },
    {
        title: "Agilemania",
        category: "Yii2 / MySQL",
        description: "Skill development platform for agile methodologies with interactive learning modules.",
        link: "https://agilemania.com/",
    },
    {
        title: "Mexerv Enterprise CRM",
        category: "Yii2 / MySQL",
        description: "Multi-module enterprise CRM for core business operations.",
        link: "https://my.mexerv.com/",
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Portfolio</span>
                    <h2 className={styles.title}>Significant Projects</h2>
                </div>
                <p className={styles.subtitle}>
                    A strategic selection from **10+ high-impact enterprise solutions** architected with Laravel, Node.js, and multi-database ecosystems.
                </p>
            </div>

            {/* Featured Grid */}
            <div className={styles.grid}>
                {FEATURED_PROJECTS.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imgWrapper}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.category}>{project.category}</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>
                                {project.description}
                            </p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                View Case Study
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Projects Section */}
            <div className={styles.otherSectionHeadline}>
                <h3 className={styles.otherTitle}>More Noteworthy Work</h3>
                <p className={styles.otherSubtitle}>Other systems and platforms I've contributed to throughout my 5-year career.</p>
            </div>

            <div className={styles.otherGrid}>
                {OTHER_PROJECTS.map((project, index) => (
                    <div key={index} className={styles.smallCard}>
                        <span className={styles.smallMeta}>{project.category}</span>
                        <h4 className={styles.smallTitle}>{project.title}</h4>
                        <p className={styles.smallDesc}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Details
                            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
