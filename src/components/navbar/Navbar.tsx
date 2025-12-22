import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src="/devConnectLogo.svg"
              alt="devConnect Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="text-primary text-3xl font-bold">devConnect</div>
          </Link>

          {/* Search Bar */}
          <SearchBar />

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Navigation Links */}
            <NavLinks />

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-slate-200"></div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Profile Dropdown */}
            <ProfileDropdown
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
