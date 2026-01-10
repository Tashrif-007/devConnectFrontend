import { useState } from "react";
import InputField from "../../ui/InputField";
import { Button } from "../../ui";

export default function FooterSubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
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
        <InputField
          label=""
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all text-sm"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
