export default function NavLinks() {
  return (
    <div className="hidden sm:flex items-center gap-6">
      <a
        href="#"
        className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
      >
        Feed
      </a>
      <a
        href="#"
        className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
      >
        Tags
      </a>
    </div>
  );
}
