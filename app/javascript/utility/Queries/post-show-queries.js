import { gql } from "apollo-boost";

export const GET_POST = gql`
  query Post($postId: ID!) {
    post(id: $postId) {
      postImage: image(width: 75, height: 75)
      title
      description
      tagline
      isVoted
      comments {
        createdAt
        id
        text
        user {
          ...user
        }
      }
      commentsCount
      viewsCount
      votesCount
      weeklyFeedPosition
      dailyFeedPosition
    }
  }
  fragment user on User {
    id
    username
    name
  }
`;

export const GET_TRENDING_LAUNCHES = gql`
  query trendingLaunches {
    postsAll {
      id
      image: image(width: 50, height:50)
      title
      tagline
      votesCount
      commentsCount
      createdAt
    }
  }
`;

export const GET_VIEWER = gql`
  query viewer {
    viewer {
      id
    }
  }
`;

export const ADD_VOTE = gql`
  mutation VoteAdd($postId: ID!) {
    voteAdd(postId: $postId){
        post {
            id
        }
    }
  }
`;

export const REMOVE_VOTE = gql`
  mutation VoteRemove($postId: ID!) {
    voteRemove(postId: $postId){
        post {
            id
        }
    }
  }
`;