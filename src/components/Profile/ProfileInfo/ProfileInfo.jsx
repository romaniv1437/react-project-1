import React from "react";

import pi from './ProfileInfo.module.css';

import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const ProfileInfo = (props) => {
    return (
        <div className={pi.profile_info}>
            <Avatar photo={props.profile.photos.large}/>
            <Description description={props.profile}/>
        </div>
    );
}

export default ProfileInfo;