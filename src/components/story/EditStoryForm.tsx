import type React from "react";
import type { Story } from "../../types"
import CreatePostForm from "../modals/CreatePostForm";

type EditStoryProps = {
    story: Story;
    onClose: () => void;
}
const EditStoryForm: React.FC<EditStoryProps> = ({story, onClose}) => {
  
  return (
    <div>
      <CreatePostForm story={story} onClose={onClose} title="Edit Your Post"
       />
    </div>
  )
}

export default EditStoryForm
