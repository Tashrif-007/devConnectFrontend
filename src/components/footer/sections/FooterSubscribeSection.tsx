import { useState } from "react";
import InputField from "../../ui/InputField";
import { Button } from "../../ui";

import styles from "./FooterSubscribeSection.module.css";

export default function FooterSubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe with email:", email);
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Subscribe</h4>
      <p className={styles.description}>Get the latest dev news and updates.</p>
      <form onSubmit={handleSubscribe} className={styles.form}>
        <InputField
          label=""
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className={styles.button}>
          Subscribe
        </Button>
      </form>
    </div>
  );
}
