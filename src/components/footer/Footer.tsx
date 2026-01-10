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

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <FooterBrandSection />
          <FooterLinksSection title="Platform" links={platformLinks} />
          <FooterLinksSection title="Company" links={companyLinks} />
          <FooterSubscribeSection />
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <FooterCopyright />
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
