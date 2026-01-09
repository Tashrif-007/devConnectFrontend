import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import CreatePostForm from "../components/modals/CreatePostForm";

const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CreatePostForm onClose={handleClose} title="Create Your Post"/>
    </div>
  );
};

export default CreatePostPage;
