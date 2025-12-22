import FooterBrandSection from "./FooterBrandSection";
import FooterLinksSection from "./FooterLinksSection";
import FooterSubscribeSection from "./FooterSubscribeSection";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterCopyright from "./FooterCopyright";

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

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <FooterBrandSection />
          <FooterLinksSection title="Platform" links={platformLinks} />
          <FooterLinksSection title="Company" links={companyLinks} />
          <FooterSubscribeSection />
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8">
          {/* Social Icons & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <FooterCopyright />
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
