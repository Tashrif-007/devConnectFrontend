import React from "react";
import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/modals/CreatePostForm";
import { ROUTES, UI_MESSAGES } from "../constants";

const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(ROUTES.PUBLIC.FEED);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CreatePostForm
        onClose={handleClose}
        title={UI_MESSAGES.PAGE_TITLES.CREATE_POST}
      />
    </div>
  );
};

export default CreatePostPage;
