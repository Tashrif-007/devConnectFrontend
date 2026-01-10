import React, { useState } from "react";
import { Button, Paragraph } from "../../ui";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./CommentForm.module.css";

interface CommentFormProps {
  onSubmit: (body: string) => Promise<boolean>;
  isLoading?: boolean;
}

const CommentForm: React.FC<CommentFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [body, setBody] = useState("");
  const { isAuthenticated } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!body.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    setSubmitting(true);
    const success = await onSubmit(body);
    setSubmitting(false);

    if (success) {
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isAuthenticated ? (
        <label className={styles.label}>
          <p className={styles.labelText}>Add a Comment</p>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts..."
            disabled={submitting || isLoading}
            className={styles.textarea}
            rows={4}
          />
        </label>
      ) : (
        <Paragraph>Please Login to comment</Paragraph>
      )}

      {error && <p className={styles.errorText}>{error}</p>}
      {isAuthenticated && (
        <Button
          type="submit"
          disabled={submitting || isLoading || !body.trim()}
          className={styles.submitButton}
        >
          {submitting ? "Posting..." : "Post Comment"}
        </Button>
      )}
    </form>
  );
};

export default CommentForm;
