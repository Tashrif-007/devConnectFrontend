interface ProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProfileDropdown({
  isOpen,
  onToggle,
}: ProfileDropdownProps) {
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 focus:outline-none"
        onClick={onToggle}
      >
        <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-200 overflow-hidden ring-2 ring-transparent transition-all">
          <img
            alt="User Avatar"
            className="h-full w-full object-cover"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=devconnect"
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={onToggle}></div>
          <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white border border-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1">
              <a
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </a>
              <a
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Change Password
              </a>
              <div className="border-t border-slate-200 my-1"></div>
              <a
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
