import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import "./user.css";

export default function User({ user }) {
  return (
    <div className="user">
      <div className="profile-photo">
        {/* <img src={user.profile_pic_url} alt="profilepic" /> */}
        <img
          src="https://scontent-maa2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/80753995_1773336572798955_4477812830697037919_n.jpg?_nc_ht=scontent-maa2-2.cdninstagram.com&_nc_cat=103&_nc_ohc=uC-AT3u3-boAX_rGgQC&oh=136161bd5f91c768b860f1db4c89f2c9&oe=5F8A23AE"
          alt="profilepic"
        />
      </div>
      <div className="about">
        <h1>{user.full_name}</h1>
        <p>{user.biography}</p>
      </div>
      <ContactNav user={user} />
    </div>
  );
}

function ContactNav({ user }) {
  return (
    <div className="contact">
      <IconButton
        onClick={() => window.open("https://instagram.com/" + user.username)}
      >
        <InstagramIcon style={{ color: "rgba(255, 255, 255, 0.6)" }} />
      </IconButton>
    </div>
  );
}
