import * as React from "react";
import UserImageComponent from "../../../../components/user-image/user-image.component";
import "./post-comment-section.component.scss";
import { timeSince } from "../../../../utility/util";
import { commentProps } from "../../../../utility/interfaces/post-comment.interface";
import { LoadingSpinner } from "../../../../components/spinner/spinner.component";

export const PostCommentSectionComponent: React.FC<commentProps> = React.memo(
  ({ comment, isLoading = true, errorMsg }) => {
    const commentSection = (
      <div className="comment-section">
        <div className="comment-header">
          <UserImageComponent key={comment.id} />
          <p className="name">{comment.user.name}</p>
          <p className="userName">@{comment.user.username}</p>
        </div>
        <p className="comment-description">{comment.text}</p>

        <span className="comment-action">
          <p className="upvote">
            <span className="bold">Upvote</span> (
            {Math.floor(Math.random() * (9 - 1 + 1) + 1)})
          </p>
          <p className="reply bold">Reply</p>
          <p className="share bold">Share</p>
          <p className="time">{timeSince(new Date(comment.createdAt))}</p>
        </span>
      </div>
    );
    return (
      <React.Fragment>
        {isLoading ? <LoadingSpinner /> : commentSection}
        {errorMsg && <div className="error">{errorMsg}</div>}
      </React.Fragment>
    );
  }
);
