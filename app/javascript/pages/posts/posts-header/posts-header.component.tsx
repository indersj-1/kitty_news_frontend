import * as React from "react";

import "./posts-header.component.scss";
import { PostHeaderProps } from "../../../utility/interfaces/post-header.interface";
import { LoadingSpinner } from "../../../components/spinner/spinner.component";
export const PostHeaderComponent: React.FC<PostHeaderProps> = React.memo(
  ({
    postImage,
    title,
    description,
    tagline,
    isLoading = true,
    voteHandler,
    votesCount,
    errorMsg,
  }) => {
    const renderHeader = (
      <div className="post-header">
        <div className="post-logo">
          <img src={postImage} />
        </div>
        <h2 className="post-title">{title}</h2>
        <div className="post-content">
          <div className="content-title">{tagline}</div>
          <div className="post-button">
            <button className="button visit-btn">Visit</button>
            <button className="button vote-btn" onClick={voteHandler}>
              UPVOTE {votesCount}
            </button>
          </div>
        </div>
        <div className="post-description">{description}</div>
      </div>
    );
    return (
      <React.Fragment>
        {isLoading ? <LoadingSpinner /> : renderHeader}
        {errorMsg && <div className="error">{errorMsg}</div>}
      </React.Fragment>
    );
  }
);
