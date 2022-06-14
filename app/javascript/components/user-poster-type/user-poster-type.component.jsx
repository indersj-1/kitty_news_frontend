import React from "react";
import UserImageComponent from "../user-image/user-image.component";
import CommenterIconComponent from "../../components/icon/commenter-icon.components";
import HunterIconComponent from "../../components/icon/hunter-icon.componnent";
import MarkerIconComponent from "../../components/icon/marker-icon.component";
import UpvoterIconComponent from "../../components/icon/upvoter-icon.component";

import './user-poster-type.component.scss';


const UserPosterTypeComponent = ({ type }) => {
  return (
    <>
      <UserImageComponent />
      {type === 1 && <CommenterIconComponent className='user-icon' />}
      {type === 2 && <HunterIconComponent className='user-icon' />}
      {type === 3 && <MarkerIconComponent className='user-icon' />}
      {type === 4 && <UpvoterIconComponent className='user-icon' />}



    </>
  )
}

export default UserPosterTypeComponent;