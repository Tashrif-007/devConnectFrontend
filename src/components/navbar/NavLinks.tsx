import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="hidden sm:flex items-center gap-6">
      <Link
        to="/feed"
        className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
      >
        Feed
      </Link>
    </div>
  );
}
