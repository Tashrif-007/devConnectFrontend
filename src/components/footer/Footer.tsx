import FooterBrandSection from "./sections/FooterBrandSection";
import FooterLinksSection from "./sections/FooterLinksSection";
import FooterSubscribeSection from "./sections/FooterSubscribeSection";
import FooterSocialLinks from "./sections/FooterSocialLinks";
import FooterCopyright from "./shared/FooterCopyright";

const platformLinks = [
  { label: "Trending Posts", href: "#" },
  { label: "Developer Teams", href: "#" },
  { label: "Tags & Topics", href: "#" },
  { label: "Leaderboard", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <FooterBrandSection />
          <FooterLinksSection title="Platform" links={platformLinks} />
          <FooterLinksSection title="Company" links={companyLinks} />
          <FooterSubscribeSection />
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <FooterCopyright />
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
