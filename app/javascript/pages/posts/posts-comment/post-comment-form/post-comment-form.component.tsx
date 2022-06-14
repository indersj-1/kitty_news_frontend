import * as React from "react";

import UserImageComponent from "../../../../components/user-image/user-image.component";

import "./post-comment-form.component.scss";

export const PostCommentFormComponent = () => {
  return (
    <div className="comment-form">
      <UserImageComponent />
      <input
        className="input-text disabled"
        type="text"
        placeholder="What do you think?"
      ></input>
      <button className="disabled">Comment</button>
    </div>
  );
};
