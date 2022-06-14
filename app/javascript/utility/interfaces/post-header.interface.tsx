export interface PostHeaderProps {
  postImage: string;
  title: string;
  description: string;
  tagline: string;
  isLoading?: boolean;
  voteHandler: () => void;
  votesCount: number;
  errorMsg?: any;
}
