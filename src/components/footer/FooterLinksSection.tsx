interface Link {
  label: string;
  href: string;
}

interface FooterLinksSectionProps {
  title: string;
  links: Link[];
}

export default function FooterLinksSection({
  title,
  links,
}: FooterLinksSectionProps) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-slate-600 hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
