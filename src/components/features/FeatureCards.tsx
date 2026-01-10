import FeatureCard from "./FeatureCard";
import { features } from "../../constants/index";
import styles from './FeatureCards.module.css';

export default function FeatureCards() {
  return (
    <section className="w-full bg-white border-y border-slate-200 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Everything you need to grow.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We've crafted a suite of tools specifically designed for the modern developer workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
