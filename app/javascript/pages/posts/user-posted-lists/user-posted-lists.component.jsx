import React from "react";
import UserPosterTypeComponent from "../../../components/user-poster-type/user-poster-type.component";

import "./user-posted-lists.component.scss";
export const UserPostedListComponent = React.memo(() => {
  return (
    <div className="user-lists">
      {Array(25).fill('').map((_, index) => (
        <UserPosterTypeComponent type={Math.floor(Math.random() * (4 - 1 + 1) + 1)} key={index} />
      ))}
    </div>
  );
});

