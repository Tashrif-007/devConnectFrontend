import { useState } from "react";

export default function FooterSubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe with email:", email);
    setEmail("");
  };

  return (
    <div className="w-full md:w-auto">
      <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
        Subscribe
      </h4>
      <p className="text-slate-600 text-sm mb-4">
        Get the latest dev news and updates.
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
