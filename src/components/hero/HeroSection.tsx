export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-background-light transition-colors duration-300 pt-20 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="hidden absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background-dark to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-primary text-xs font-medium mb-8 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          v2.0 Released. The Social Network for Code
        </div> */}

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
          Where Developers
          <span className="block">Build Together.</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
          Escape the noise. Join a purpose-built community for software
          engineers to share deep technical insights, debug complex problems,
          and accelerate career growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-12">
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 bg-primary hover:bg-primary-hover font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-primary/40 flex items-center justify-center gap-2">
            Get Started
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-primary text-slate-700 font-bold text-lg rounded-full transition-all duration-300 hover:bg-slate-50 flex items-center justify-center gap-2 group">
            Posts
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>

        {/* Trusted By Section
        <div className="w-full border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-4">
            Trusted by devs at
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="text-slate-600 font-semibold text-sm">Acme</div>
            <div className="text-slate-600 font-semibold text-sm">GlobalTech</div>
            <div className="text-slate-600 font-semibold text-sm">Nebula</div>
            <div className="text-slate-600 font-semibold text-sm">CodeFlow</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
