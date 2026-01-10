import type React from "react";
import CreatePostForm from "../../modals/post/CreatePostForm";
import styles from './EditStoryForm.module.css';
import type { Story } from "../../../interfaces";

type EditStoryProps = {
  story: Story;
  onClose: () => void;
};
const EditStoryForm: React.FC<EditStoryProps> = ({ story, onClose }) => {
  return (
    <div>
      <CreatePostForm story={story} onClose={onClose} title="Edit Your Post" />
    </div>
  );
};

export default EditStoryForm;
