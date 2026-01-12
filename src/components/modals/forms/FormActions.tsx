import React from "react";
import { Button } from "../../ui";
import { UI_MESSAGES } from "../../../constants";
import styles from "./FormActions.module.css";

interface FormActionsProps {
  loading: boolean;
  onCancel: () => void;
  onPublish: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({
  loading,
  onCancel,
  onPublish,
}) => {
  return (
    <div className={styles.container}>
      <Button
        type="button"
        onClick={onCancel}
        disabled={loading}
        className={styles.cancelButton}
      >
        {UI_MESSAGES.BUTTONS.CANCEL}
      </Button>
      <Button
        type="button"
        onClick={onPublish}
        disabled={loading}
        className={styles.publishButton}
      >
        {loading
          ? UI_MESSAGES.BUTTONS.PUBLISHING
          : UI_MESSAGES.BUTTONS.PUBLISH_POST}
        {!loading && <span>➜</span>}
      </Button>
    </div>
  );
};

export default FormActions;
