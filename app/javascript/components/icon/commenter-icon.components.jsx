import React from "react";

const CommenterIconComponent = ({ className }) => {

  return (
    <svg width="14" className={className} height="14" xmlns="http://www.w3.org/2000/svg">
      <title>Commenter</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z"
          fill="#D9E1EC"
          fillRule="nonzero"
        />
        <path
          d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
          fill="#FFF"
        />
        <path
          d="M6.94 4c1.655 0 3 1.181 3 2.633 0 1.453-1.345 2.634-3 2.634a3.4 3.4 0 0 1-.518-.04l-1.362.742a.25.25 0 0 1-.37-.22V8.356a2.446 2.446 0 0 1-.75-1.722C3.94 5.181 5.286 4 6.94 4Z"
          fill="#005EF6"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default CommenterIconComponent;