export interface commentsProps {
  comments: comment[];
  isLoading: boolean;
  errorMsg: any;
}

export interface commentProps {
  comment: comment;
  isLoading: boolean;
  errorMsg: any;
}

export interface comment {
  createdAt?: string;
  id?: string;
  text?: string;
  user?: User;
}

export interface User {
  id: string;
  image: string;
  name: string;
  username: string;
}
