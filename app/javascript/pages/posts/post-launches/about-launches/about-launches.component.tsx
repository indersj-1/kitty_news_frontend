import * as React from "react";
import { AboutLaunchesItemListComponent } from "../about-launches-item-list/about-launches-item-list.component";

import "./about-launches.component.scss";
import { aboutLaunchesProps } from "../../../../utility/interfaces/about-launches.interface";
import { LoadingSpinner } from "../../../../components/spinner/spinner.component";
export const AboutLaunchesComponent: React.FC<aboutLaunchesProps> = React.memo(
  ({
    upvotes,
    comments,
    views,
    dailyrank,
    weeklyrank,
    isLoading = true,
    errorMsg,
  }) => {
    const item = {
      Upvotes: upvotes,
      Comments: comments,
      Views: views,
      "Daily Rank": dailyrank,
      "Weekly Rank": weeklyrank,
    };
    const aboutLaunchRender = (
      <div className="launch-Item">
        <h1>About This Launches</h1>
        <div className="launch-Item-list">
          {Object.keys(item).map((key, index) => (
            <AboutLaunchesItemListComponent
              name={key}
              value={item[key]}
              key={index}
            />
          ))}
        </div>
        <div className="report">
          <p>Report</p>
          <p>•</p>
          <p>Edit this page</p>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        {isLoading ? <LoadingSpinner /> : aboutLaunchRender}
        {errorMsg && <div className="error">{errorMsg}</div>}
      </React.Fragment>
    );
  }
);
