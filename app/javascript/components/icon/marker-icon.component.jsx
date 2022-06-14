import React from "react";

const MarkerIconComponent = ({ className }) => {
  return (
    <svg
      width="14"
      className={className}
      height="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Maker</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z"
          fill="#16C79A"
          fillRule="nonzero"
        />
        <path
          d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
          fill="#FFF"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M4.055 10h1.05V6.164h.079L6.629 10h.738l1.446-3.836h.078V10h1.05V4.363H8.59L7.035 8.488h-.07L5.406 4.363H4.055z"
        />
      </g>
    </svg>
  );
};

export default MarkerIconComponent;
