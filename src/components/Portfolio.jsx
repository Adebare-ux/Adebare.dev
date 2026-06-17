import { useState } from "react";
import { MailIcon, GitHubIcon, PhoneIcon } from "./Icons";
import { skills, projects, experiences } from "../data/portfolio-data";

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ff",
    color: "#1e1b2e",
    lineHeight: 1.6,
    overflowX: "hidden",
    minHeight: "100vh",
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2.5rem",
    background: "rgba(245,243,255,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(109,40,217,0.15)",
  },
  navLogo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "#7c3aed",
    letterSpacing: "-0.02em",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  navCta: {
    background: "#6d28d9",
    color: "#fff",
    padding: "0.45rem 1.1rem",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 500,
  },
  hero: {
    minHeight: "92vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5rem 2.5rem 4rem",
    maxWidth: 860,
    margin: "0 auto",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "rgba(109,40,217,0.08)",
    border: "1px solid rgba(109,40,217,0.22)",
    color: "#7c3aed",
    fontSize: "0.78rem",
    fontWeight: 600,
    padding: "0.3rem 0.75rem",
    borderRadius: 999,
    marginBottom: "1.8rem",
    width: "fit-content",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  pulseDot: {
    display: "inline-block",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#059669",
  },
  h1: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    color: "#1e1b2e",
    marginBottom: "1.5rem",
  },
  h1Em: { color: "#7c3aed", fontStyle: "normal" },
  heroSub: {
    fontSize: "1.05rem",
    color: "#6b7280",
    maxWidth: 560,
    lineHeight: 1.75,
    marginBottom: "2.5rem",
  },
  heroActions: { display: "flex", gap: "1rem", flexWrap: "wrap" },
  btnPrimary: {
    background: "#6d28d9",
    color: "#fff",
    padding: "0.75rem 1.6rem",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  btnGhost: {
    border: "1.5px solid rgba(109,40,217,0.2)",
    color: "#1e1b2e",
    padding: "0.75rem 1.6rem",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  heroStats: {
    display: "flex",
    gap: "2.5rem",
    marginTop: "4rem",
    flexWrap: "wrap",
  },
  statItem: { display: "flex", flexDirection: "column" },
  statNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#7c3aed",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "0.78rem",
    color: "#6b7280",
    marginTop: "0.3rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  section: {
    padding: "5rem 2.5rem",
    maxWidth: 860,
    margin: "0 auto",
  },
  sectionTag: {
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#6d28d9",
    marginBottom: "0.75rem",
    display: "block",
  },
  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
    fontWeight: 700,
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    color: "#1e1b2e",
    marginBottom: "1rem",
  },
  sectionDesc: {
    color: "#6b7280",
    fontSize: "1rem",
    lineHeight: 1.75,
    maxWidth: 540,
    marginBottom: "3rem",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
    gap: "0.75rem",
  },
  skillChip: {
    background: "#fff",
    border: "1px solid rgba(109,40,217,0.12)",
    borderRadius: 10,
    padding: "0.65rem 0.9rem",
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#1e1b2e",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 1px 3px rgba(109,40,217,0.06)",
  },
  projectsGrid: { display: "flex", flexDirection: "column", gap: "1.25rem" },
  projectCard: {
    background: "#fff",
    border: "1px solid rgba(109,40,217,0.12)",
    borderRadius: 16,
    padding: "1.75rem",
    boxShadow: "0 1px 4px rgba(109,40,217,0.06)",
  },
  projectHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "0.75rem",
  },
  projectTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#1e1b2e",
  },
  projectType: {
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#7c3aed",
    background: "rgba(109,40,217,0.08)",
    border: "1px solid rgba(109,40,217,0.18)",
    padding: "0.25rem 0.6rem",
    borderRadius: 6,
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  projectDesc: {
    color: "#6b7280",
    fontSize: "0.9rem",
    lineHeight: 1.7,
    marginBottom: "1rem",
  },
  projectTags: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  tag: {
    fontSize: "0.75rem",
    color: "#6b7280",
    background: "#f3f0ff",
    border: "1px solid rgba(109,40,217,0.1)",
    padding: "0.2rem 0.55rem",
    borderRadius: 6,
  },
  expCard: {
    background: "#fff",
    border: "1px solid rgba(109,40,217,0.12)",
    borderLeft: "3px solid #6d28d9",
    borderRadius: "0 16px 16px 0",
    padding: "1.75rem",
    marginBottom: "1.25rem",
    boxShadow: "0 1px 4px rgba(109,40,217,0.06)",
  },
  expHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  expTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#1e1b2e",
  },
  expBadge: {
    fontSize: "0.72rem",
    color: "#059669",
    background: "rgba(5,150,105,0.08)",
    border: "1px solid rgba(5,150,105,0.2)",
    padding: "0.2rem 0.55rem",
    borderRadius: 6,
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  expRole: {
    fontSize: "0.82rem",
    color: "#7c3aed",
    marginBottom: "0.75rem",
    fontWeight: 500,
  },
  expList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    padding: 0,
    margin: 0,
  },
  expListItem: {
    color: "#6b7280",
    fontSize: "0.875rem",
    lineHeight: 1.65,
    paddingLeft: "1rem",
    position: "relative",
  },
  eduCard: {
    background: "#fff",
    border: "1px solid rgba(109,40,217,0.12)",
    borderRadius: 16,
    padding: "1.75rem",
    display: "flex",
    gap: "1.25rem",
    alignItems: "flex-start",
    boxShadow: "0 1px 4px rgba(109,40,217,0.06)",
  },
  eduIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: "rgba(109,40,217,0.08)",
    border: "1px solid rgba(109,40,217,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    flexShrink: 0,
  },
  eduDeg: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#1e1b2e",
    marginBottom: "0.25rem",
  },
  eduSchool: {
    fontSize: "0.875rem",
    color: "#7c3aed",
    marginBottom: "0.5rem",
    fontWeight: 500,
  },
  eduNote: { fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.6 },
  contactCard: {
    background:
      "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 60%, #ede9fe 100%)",
    border: "1.5px solid rgba(109,40,217,0.22)",
    borderRadius: 24,
    padding: "3rem 2.5rem",
    textAlign: "center",
  },
  contactLinks: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contactLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "#fff",
    border: "1px solid rgba(109,40,217,0.12)",
    color: "#1e1b2e",
    textDecoration: "none",
    padding: "0.65rem 1.25rem",
    borderRadius: 10,
    fontSize: "0.85rem",
    fontWeight: 500,
    boxShadow: "0 1px 3px rgba(109,40,217,0.07)",
  },
  divider: {
    height: 1,
    background: "rgba(109,40,217,0.12)",
    maxWidth: 860,
    margin: "0 auto",
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    color: "#6b7280",
    fontSize: "0.8rem",
    borderTop: "1px solid rgba(109,40,217,0.12)",
  },
};

export default function Portfolio() {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .pulse-dot { animation: pulse 2s infinite; }
        .skill-chip:hover { border-color: #6d28d9 !important; box-shadow: 0 2px 8px rgba(109,40,217,0.14) !important; }
        .project-card:hover { border-color: rgba(109,40,217,0.38) !important; box-shadow: 0 4px 16px rgba(109,40,217,0.1) !important; }
        .contact-link:hover { border-color: #6d28d9 !important; box-shadow: 0 3px 10px rgba(109,40,217,0.13) !important; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .btn-ghost:hover { border-color: #6d28d9 !important; background: rgba(109,40,217,0.05) !important; }
        .exp-arrow::before { content: '→'; position: absolute; left: 0; color: #6d28d9; font-size: 0.75rem; top: 0.1em; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 600px) {
          .nav-links-wrap { display: none !important; }
          .hero-section { padding: 3.5rem 1.25rem 2.5rem !important; min-height: auto !important; }
          .main-section { padding: 3.5rem 1.25rem !important; }
          .edu-card-inner { flex-direction: column !important; }
          .contact-card-inner { padding: 2rem 1.25rem !important; }
          .hero-stats-wrap { gap: 1.5rem !important; }
        }
      `}</style>

      <div style={styles.root}>
        <nav style={styles.nav}>
          <span style={styles.navLogo}>Maliq.dev</span>
          <ul style={styles.navLinks} className="nav-links-wrap">
            {["about", "skills", "projects", "experience", "contact"].map(
              (s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    style={{
                      ...styles.navLink,
                      color: hoveredNav === s ? "#1e1b2e" : "#6b7280",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={() => setHoveredNav(s)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              ),
            )}
          </ul>
          <a href="mailto:adeagbomaliqadebare@gmail.com" style={styles.navCta}>
            Hire me
          </a>
        </nav>

        <section id="about" style={styles.hero} className="hero-section">
          <div style={styles.heroBadge}>
            <span className="pulse-dot" style={styles.pulseDot} />
            Open to work — Lagos, Nigeria
          </div>
          <h1 style={styles.h1}>
            Frontend Engineer
            <br />
            building <em style={styles.h1Em}>things that</em>
            <br />
            <em style={styles.h1Em}>actually ship.</em>
          </h1>
          <p style={styles.heroSub}>
            Final-year CS student at LAUTECH, specialising in React, JavaScript
            (ES6+), and performant UI architecture. I build scalable, responsive
            web apps that users love to interact with.
          </p>
          <div style={styles.heroActions}>
            <a
              href="#projects"
              className="btn-primary"
              style={{
                ...styles.btnPrimary,
                transition: "opacity 0.15s, transform 0.15s",
              }}
            >
              View Projects
            </a>
            <a
              href="mailto:adeagbomaliqadebare@gmail.com"
              className="btn-ghost"
              style={styles.btnGhost}
            >
              Get in Touch
            </a>
          </div>
          <div style={styles.heroStats} className="hero-stats-wrap">
            {[
              { num: "3+", label: "Production Projects" },
              { num: "2026", label: "Graduating" },
              { num: "Full", label: "Stack Capable" },
              { num: "15–20h", label: "Available/Week" },
            ].map((s) => (
              <div key={s.label} style={styles.statItem}>
                <span style={styles.statNum}>{s.num}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        <section id="skills" style={styles.section} className="main-section">
          <span style={styles.sectionTag}>Toolkit</span>
          <h2 style={styles.h2}>Skills & Technologies</h2>
          <p style={styles.sectionDesc}>
            Frontend-first, with the backend knowledge to build end-to-end
            solutions.
          </p>
          <div style={styles.skillsGrid}>
            {skills.map((sk) => (
              <div
                key={sk.label}
                className="skill-chip"
                style={{
                  ...styles.skillChip,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: sk.color,
                    flexShrink: 0,
                  }}
                />
                {sk.label}
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        <section id="projects" style={styles.section} className="main-section">
          <span style={styles.sectionTag}>Work</span>
          <h2 style={styles.h2}>Featured Projects</h2>
          <p style={styles.sectionDesc}>
            A selection of real-world builds spanning full-stack, frontend, and
            UI design.
          </p>
          <div style={styles.projectsGrid}>
            {projects.map((p) => (
              <div
                key={p.title}
                className="project-card"
                style={{
                  ...styles.projectCard,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={styles.projectHeader}>
                  <span style={styles.projectTitle}>{p.title}</span>
                  <span style={styles.projectType}>{p.type}</span>
                </div>
                <p style={styles.projectDesc}>{p.desc}</p>
                <div style={styles.projectTags}>
                  {p.tags.map((t) => (
                    <span key={t} style={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.url && (
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{
                        ...styles.btnGhost,
                        padding: "0.45rem 0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      Visit Site
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        <section
          id="experience"
          style={styles.section}
          className="main-section"
        >
          <span style={styles.sectionTag}>Experience</span>
          <h2 style={styles.h2}>What I've Been Building</h2>
          <p style={styles.sectionDesc}>
            Hands-on experience shipping production-ready frontend and
            full-stack applications.
          </p>
          {experiences.map((e) => (
            <div key={e.title} style={styles.expCard}>
              <div style={styles.expHeader}>
                <span style={styles.expTitle}>{e.title}</span>
                <span style={styles.expBadge}>{e.badge}</span>
              </div>
              <div style={styles.expRole}>{e.role}</div>
              <ul style={styles.expList}>
                {e.items.map((item) => (
                  <li
                    key={item}
                    className="exp-arrow"
                    style={styles.expListItem}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div style={styles.divider} />

        <section style={styles.section} className="main-section">
          <span style={styles.sectionTag}>Education</span>
          <h2 style={styles.h2}>Academic Background</h2>
          <p style={styles.sectionDesc}>
            Computer Science at one of Nigeria's leading technology
            universities.
          </p>
          <div style={styles.eduCard} className="edu-card-inner">
            <div style={styles.eduIcon}>🎓</div>
            <div>
              <div style={styles.eduDeg}>
                B.Tech Computer Science — 500 Level
              </div>
              <div style={styles.eduSchool}>
                Ladoke Akintola University of Technology (LAUTECH) · Expected
                2026
              </div>
              <div style={styles.eduNote}>
                Final-year student. Final year project: Design and
                implementation of machine learning in phishing website detection
                — bridging frontend expertise with applied cybersecurity and AI.
              </div>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        <section id="contact" style={styles.section} className="main-section">
          <div style={styles.contactCard} className="contact-card-inner">
            <span
              style={{
                ...styles.sectionTag,
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Let's Talk
            </span>
            <h2 style={{ ...styles.h2, marginBottom: "0.75rem" }}>
              Ready to build something great?
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
              Available for frontend engineering, full-stack development, and AI
              evaluation roles. Open to entry-level, freelance, and part-time
              opportunities — 15–20 hrs/week.
            </p>
            <div style={styles.contactLinks}>
              <a
                href="mailto:adeagbomaliqadebare@gmail.com"
                className="contact-link"
                style={{
                  ...styles.contactLink,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <MailIcon /> Email Me
              </a>
              <a
                href="https://github.com/Adebare-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{
                  ...styles.contactLink,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="tel:+2348110097064"
                className="contact-link"
                style={{
                  ...styles.contactLink,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <PhoneIcon /> +234 811 009 7064
              </a>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <p>
            © 2025 Adeagbo Maliq Adebare · Lagos, Nigeria · Built with React +
            Vite
          </p>
        </footer>
      </div>
    </>
  );
}
