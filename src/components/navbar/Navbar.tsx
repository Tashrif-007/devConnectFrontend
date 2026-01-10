import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./ProfileDropdown";
import CreatePostModal from "../feed/CreatePostModal";
import { ROUTES } from "../../constants";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const isFeedPage = location.pathname === ROUTES.PUBLIC.FEED;
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              to={ROUTES.PUBLIC.HOME}
              className="flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
            >
              <img
                src="/devConnectLogo1.png"
                alt="devConnect Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="text-primary text-3xl font-bold">devConnect</div>
            </Link>
            <SearchBar />
            <div className="flex items-center gap-2 sm:gap-6">
              {isFeedPage && isAuthenticated && (
                <button
                  onClick={() => navigate(ROUTES.APP.CREATE_POST)}
                  className="hidden sm:inline-flex px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-black hover:opacity-80 transition-opacity ease-in-out duration-300 transition-colors"
                >
                  Create Post
                </button>
              )}
              <NavLinks />
              {isAuthenticated && (
                <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
              )}
              <ThemeToggle />
              <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
              {isAuthenticated ? (
                <ProfileDropdown
                  isOpen={isDropdownOpen}
                  onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <div className="hidden sm:flex items-center gap-4.5">
                  <Link
                    to="/login"
                    className="text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="sm:inline-flex px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-black hover:opacity-80 transition-opacity ease-in-out duration-300 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </>
  );
}
