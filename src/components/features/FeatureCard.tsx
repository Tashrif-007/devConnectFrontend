interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 relative overflow-hidden">
      {/* Icon Background */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="text-8xl text-primary">{icon}</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary text-2xl">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3">
          {title}
        </h4>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
