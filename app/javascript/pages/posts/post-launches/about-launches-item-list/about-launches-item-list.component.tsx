import * as React from "react";
import "./about-launches-item-list.component.scss";
import { aboutLaunchesItemProps } from "../../../../utility/interfaces/about-launches.interface";
export const AboutLaunchesItemListComponent: React.FC<aboutLaunchesItemProps> =
  React.memo(({ name, value }) => {
    return (
      <div className="about-launches-item-list">
        <div className="item">
          <p className="name">{name}</p>
          <p className="value">{value}</p>
        </div>
      </div>
    );
  });
