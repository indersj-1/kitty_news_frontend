import * as React from "react";

import "./trending-launches-list.component.scss";
import { trendingLaunchesItem } from "../../../../utility/interfaces/trending-launches.interface";
export const TrendingLaunchesListComponent: React.FC<trendingLaunchesItem> =
  React.memo(({ trendingItem }) => {
    const { title, image, tagline, votesCount, commentsCount } = trendingItem;
    return (
      <div className="trending-launches-item-list">
        <div className="trending-launches-item">
          <img src={image} alt={title} />
          <p className="item-title">{title}</p>
          <p className="item-description">{tagline}</p>
          <span className="item-details">
            <p className="upvotes">{votesCount}</p>
            <p>•</p>
            <p className="coments">{commentsCount} Comments</p>
          </span>
        </div>
      </div>
    );
  });
