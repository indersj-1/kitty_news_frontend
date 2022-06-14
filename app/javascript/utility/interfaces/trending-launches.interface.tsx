export interface trendingLaunchesItem {
  trendingItem: item;
}

interface item {
  title: string;
  image: string;
  tagline: string;
  votesCount: number;
  commentsCount: number;
}
