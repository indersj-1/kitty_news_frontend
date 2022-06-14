import * as React from "react";
import { AboutLaunchesComponent } from "../pages/posts/post-launches/about-launches/about-launches.component";
import { TrendingLaunchesComponent } from "../pages/posts/post-launches/trending-launches/trending-launches.component";
import { PostCommentFormComponent } from "../pages/posts/posts-comment/post-comment-form/post-comment-form.component";
import { PostCommentListComponent } from "../pages/posts/posts-comment/post-comment-list/post-comment-list.component";
import { PostHeaderComponent } from "../pages/posts/posts-header/posts-header.component";
import { UserPostedListComponent } from "../pages/posts/user-posted-lists/user-posted-lists.component";
import renderComponent from "./utils/renderComponent";

import { useQuery, useMutation } from "react-apollo";
import {
  GET_POST,
  ADD_VOTE,
  REMOVE_VOTE,
} from "../utility/Queries/post-show-queries";
import { userViewer } from "../custom-hooks/useViewer";
function PostsShow({ postId }) {
  const { isUserLoggedIn } = userViewer();

  const { loading, error, data, refetch } = useQuery(GET_POST, {
    variables: { postId },
  });
  const [addVote] = useMutation(ADD_VOTE);
  const [removeVote] = useMutation(REMOVE_VOTE);
  const childRef: any = React.useRef();

  const voteHandler = React.useCallback(async () => {
    if (isUserLoggedIn) {
      if (data.post.isVoted) {
        await removeVote({ variables: { postId } });
      } else {
        await addVote({ variables: { postId } });
      }
      refetch();
      if (childRef.current) {
        childRef.current.getTrendingItem();
      }
    } else {
      window.location.href = "/users/sign_in";
    }
  }, [data, postId, loading, refetch, isUserLoggedIn, addVote, removeVote]);

  return (
    <div className="box">
      <article className="post">
        <PostHeaderComponent
          postImage={data?.post.postImage}
          title={data?.post.title}
          description={data?.post.description}
          tagline={data?.post.tagline}
          isLoading={loading}
          voteHandler={voteHandler}
          votesCount={data?.post.votesCount}
          errorMsg={error}
        />
        <UserPostedListComponent />
        <PostCommentFormComponent />
        <PostCommentListComponent
          isLoading={loading}
          errorMsg={error}
          comments={data?.post.comments}
        />
        <AboutLaunchesComponent
          upvotes={data?.post.votesCount}
          comments={data?.post.commentsCount}
          views={data?.post.viewsCount}
          dailyrank={`#${data?.post.dailyFeedPosition}`}
          weeklyrank={`#${data?.post.weeklyFeedPosition}`}
          isLoading={loading}
          errorMsg={error}
        />
        <TrendingLaunchesComponent ref={childRef} />
      </article>
    </div>
  );
}

renderComponent(PostsShow);
