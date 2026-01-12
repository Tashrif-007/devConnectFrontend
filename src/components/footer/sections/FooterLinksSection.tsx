interface Link {
  label: string;
  href: string;
}

interface FooterLinksSectionProps {
  title: string;
  links: Link[];
}

import styles from "./FooterLinksSection.module.css";

export default function FooterLinksSection({
  title,
  links,
}: FooterLinksSectionProps) {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
