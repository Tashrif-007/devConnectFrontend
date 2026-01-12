import styles from "./FooterCopyright.module.css";

export default function FooterCopyright() {
  return (
    <p className={styles.text}>
      © {new Date().getFullYear()} devConnect. All rights reserved.
    </p>
  );
}
