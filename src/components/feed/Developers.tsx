import React, { useMemo } from "react";
import { FiUser } from "react-icons/fi";
import { useGetUsers } from "../../queries/users/getUsers";
import SectionHeader from "./SectionHeader";
import DeveloperCard from "./DeveloperCard";
import DeveloperSkeleton from "./DeveloperSkeleton";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Developers.module.css";

const Developers: React.FC = () => {
  const { users, loading, error } = useGetUsers(1, "");
  const navigate = useNavigate();
  const displayedDevelopers = useMemo(() => {
    return users.slice(0, 3);
  }, [users]);

  const handleClick = () => {
    navigate(ROUTES.APP.SEARCH);
  };

  return (
    <div className={styles.container}>
      <SectionHeader Icon={FiUser} title="Developers to Know" />

      <div className={styles.developersList}>
        {loading ? (
          <div className={styles.loadingContainer}>
            {[1, 2, 3].map((i) => (
              <DeveloperSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className={styles.errorMessage}>{error}</div>
        ) : displayedDevelopers.length === 0 ? (
          <div className={styles.emptyMessage}>No developers found</div>
        ) : (
          displayedDevelopers.map((dev) => (
            <DeveloperCard key={dev.userId} developer={dev} />
          ))
        )}
      </div>

      <Button className="button button-secondary" onClick={handleClick}>
        Find More People
      </Button>
    </div>
  );
};

export default Developers;
