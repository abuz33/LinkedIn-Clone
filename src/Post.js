import { Avatar } from "@material-ui/core";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = forwardRef(({ name, desc, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
        {photoUrl && <img src={photoUrl} alt="" />}
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
