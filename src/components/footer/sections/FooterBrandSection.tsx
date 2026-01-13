import styles from "./FooterBrandSection.module.css";

export default function FooterBrandSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logo}>devConnect</span>
      </div>
      <p className={styles.description}>
        Empowering developers to share knowledge, connect with peers, and build
        the future of software together.
      </p>
    </div>
  );
}
