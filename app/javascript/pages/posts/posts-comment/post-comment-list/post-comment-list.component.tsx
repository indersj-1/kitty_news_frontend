import * as React from "react";

import { PostCommentSectionComponent } from "../post-comment-section/post-comment-section.component";
import { commentsProps } from "../../../../utility/interfaces/post-comment.interface";
import "./post-comment-list.component.scss";
import { LoadingSpinner } from "../../../../components/spinner/spinner.component";

export const PostCommentListComponent: React.FC<commentsProps> = React.memo(
  ({ comments, isLoading = true, errorMsg }) => {
    const renderCommentList = (
      <div className="comment-list">
        {comments && comments.length ? (
          comments.map((comment) => (
            <PostCommentSectionComponent
              isLoading={isLoading}
              errorMsg={errorMsg}
              comment={comment}
              key={comment.id}
            />
          ))
        ) : (
          <h2>Be the first to comment :) </h2>
        )}
      </div>
    );
    return (
      <React.Fragment>
        {isLoading ? <LoadingSpinner /> : renderCommentList}
        {errorMsg && <div className="error">{errorMsg}</div>}
      </React.Fragment>
    );
  }
);
