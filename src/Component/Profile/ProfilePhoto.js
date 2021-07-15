import myImage from "./Mark_Zuckerberg.jpg" ;


import React from "react";

const ProfilePhoto = () => {
 return <img src={myImage} className="img-thumbnail" width={'200px'}  height={'200px'}/>;
};
export default ProfilePhoto;