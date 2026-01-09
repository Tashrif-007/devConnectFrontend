import React from "react";
import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/modals/post/CreatePostForm";
import { ROUTES, UI_MESSAGES } from "../constants";
import styles from "./CreatePostPage.module.css";

const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/feed");
  };

  return (
    <div className={styles.container}>
      <CreatePostForm
        onClose={handleClose}
        title={UI_MESSAGES.PAGE_TITLES.CREATE_POST}
      />
    </div>
  );
};

export default CreatePostPage;
