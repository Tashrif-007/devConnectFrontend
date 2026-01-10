import React, { useMemo } from "react";
import { FiUser } from "react-icons/fi";
import { useGetUsers } from "../../queries/users/getUsers";
import SectionHeader from "./SectionHeader";
import DeveloperCard from "./DeveloperCard";
import DeveloperSkeleton from "./DeveloperSkeleton";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

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
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <SectionHeader Icon={FiUser} title="Developers to Know" />

      <div className="space-y-4">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <DeveloperSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-sm">{error}</div>
        ) : displayedDevelopers.length === 0 ? (
          <div className="text-gray-500 text-sm">No developers found</div>
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
