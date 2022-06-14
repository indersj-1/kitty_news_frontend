import React from "react";

import "./user-image.component.scss";

const UserImageComponent = () => {
  return (
    <div className="user-profile">
      <img
        className="user-img"
        src="https://via.placeholder.com/35x35"
        alt="img"
        title="img"
      />
    </div>
  );
};

export default UserImageComponent;
