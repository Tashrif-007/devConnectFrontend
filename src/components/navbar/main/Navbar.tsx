import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import SearchBar from "../navigation/SearchBar";
import NavLinks from "../navigation/NavLinks";
// import ThemeToggle from "../theme/ThemeToggle";
import ProfileDropdown from "../menu/ProfileDropdown";
import CreatePostModal from "../../feed/CreatePostModal";
import { ROUTES } from "../../../constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const isFeedPage = location.pathname === ROUTES.PUBLIC.FEED;
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Link to={ROUTES.PUBLIC.HOME} className={styles.logo}>
              <img
                src="/devConnectLogo1.png"
                alt="devConnect Logo"
                className={styles.logoImg}
              />
              <div className={styles.logoText}>devConnect</div>
            </Link>
            <SearchBar />
            <div className={styles.navActions}>
              {isFeedPage && isAuthenticated && (
                <button
                  onClick={() => navigate(ROUTES.APP.CREATE_POST)}
                  className={styles.createPostButton}
                >
                  Create Post
                </button>
              )}
              <NavLinks />
              {isAuthenticated && <div className={styles.divider}></div>}
              {/* <ThemeToggle /> */}
              {/* <div className={styles.divider}></div> */}
              {isAuthenticated ? (
                <ProfileDropdown
                  isOpen={isDropdownOpen}
                  onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <div className={styles.authLinks}>
                  <Link to="/login" className={styles.loginLink}>
                    Login
                  </Link>
                  <Link to="/signup" className={styles.signupLink}>
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
