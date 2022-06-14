import * as React from "react";
import { useQuery } from "react-apollo";
import { LoadingSpinner } from "../../../../components/spinner/spinner.component";
import { GET_TRENDING_LAUNCHES } from "../../../../utility/Queries/post-show-queries";
import { TrendingLaunchesListComponent } from "../trending-launches-list/trending-launches-list.component";

import "./trending-launches.component.scss";

export const TrendingLaunchesComponent = React.forwardRef((props, ref) => {
  const {
    loading = true,
    error,
    data,
    refetch,
  } = useQuery(GET_TRENDING_LAUNCHES);
  React.useImperativeHandle(ref, () => ({
    getTrendingItem() {
      refetch();
    },
  }));

  const sortTrendingItem = (data) => {
    return (
      data?.postsAll
        .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
        .slice(0, 3) || []
    );
  };
  const cacheTrendingList = React.useMemo(() => sortTrendingItem(data), [data]);

  const trendingLaunchesRender = (
    <div className="trending-launches">
      <div className="treding-header">
        <strong>Trending Launches</strong>
      </div>
      <div className="trending-launches-list">
        {cacheTrendingList &&
          cacheTrendingList.map((launcheItem, index) => (
            <TrendingLaunchesListComponent
              trendingItem={launcheItem}
              key={index}
            />
          ))}
      </div>
    </div>
  );
  return (
    <React.Fragment>
      {loading ? <LoadingSpinner /> : trendingLaunchesRender}
      {error && <div className="error">{error}</div>}
    </React.Fragment>
  );
});
