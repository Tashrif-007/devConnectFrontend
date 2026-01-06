import React, { useEffect, useMemo } from "react";
import { FiUser } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../store/userSlice";
import SectionHeader from "./SectionHeader";
import DeveloperCard from "./DeveloperCard";
import DeveloperSkeleton from "./DeveloperSkeleton";

const Developers: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    items: users,
    loading,
    error,
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, itemsPerPage: 3 }));
  }, [dispatch]);

  const displayedDevelopers = useMemo(() => {
    return users.slice(0, 3);
  }, [users]);

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

      <button className="w-full mt-5 py-2.5 text-center text-gray-700 text-sm font-semibold hover:bg-gray-50 rounded transition-colors border border-gray-200">
        Find More People
      </button>
    </div>
  );
};

export default Developers;
