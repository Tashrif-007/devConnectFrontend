import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

interface Developer {
  id: string;
  name: string;
  username: string;
}

const DUMMY_DEVELOPERS: Developer[] = [
  {
    id: "1",
    name: "Mark T.",
    username: "@marktech",
  },
  {
    id: "2",
    name: "Lisa Wong",
    username: "@lisawong",
  },
  {
    id: "3",
    name: "James R.",
    username: "@jamesstack",
  },
];

const Developers: React.FC = () => {
  const [developers, setDevelopers] = useState<Developer[]>(DUMMY_DEVELOPERS);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-4">
        <FiUser size={20} className="text-gray-700" />
        <h3 className="text-lg font-bold text-gray-900">Developers to Know</h3>
      </div>

      <div className="space-y-4">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="flex items-center justify-between gap-3 pb-4 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {dev.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm">
                  {dev.name}
                </p>
                <p className="text-gray-500 text-xs truncate">{dev.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-5 py-2.5 text-center text-gray-700 text-sm font-semibold hover:bg-gray-50 rounded transition-colors border border-gray-200">
        Find More People
      </button>
    </div>
  );
};

export default Developers;
