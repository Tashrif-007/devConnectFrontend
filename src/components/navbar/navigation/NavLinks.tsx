import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { ROUTES } from "../../../constants";
import { USER_ROLES } from "../../../types";
import styles from "./NavLinks.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../../ui";

export default function NavLinks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const isAdmin = user?.role === USER_ROLES.ADMIN;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Link to={ROUTES.PUBLIC.FEED} className={styles.link}>
          Feed
        </Link>
        <Link
          to={`${ROUTES.APP.SEARCH}?find=&tab=users`}
          className={styles.link}
        >
          Search
        </Link>
        {isAdmin && (
          <Link to={ROUTES.ADMIN.DASHBOARD} className={styles.link}>
            Admin
          </Link>
        )}
      </div>
      <Button
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <RxHamburgerMenu size={24} />
      </Button>
      {isMobileMenuOpen && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className={styles.mobileMenu}>
            <Link
              to={ROUTES.PUBLIC.FEED}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              Feed
            </Link>
            <Link
              to={`${ROUTES.APP.SEARCH}${ROUTES.APP.SEARCH_USER_TAB}`}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              Search
            </Link>
            {isAdmin && (
              <Link
                to={ROUTES.ADMIN.DASHBOARD}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                Admin
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
}
