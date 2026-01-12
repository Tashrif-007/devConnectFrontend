export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle Theme"
      className="p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
}
