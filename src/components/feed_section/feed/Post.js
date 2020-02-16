import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  const { id, name, date, time } = post;

  return (
    <li className="post">
        <section className="post-description">
            <span className="name">{name}</span> <br />
            <span className="dateAndTime">{date}, {time}</span>
        </section>
    </li>
  );
};

export default Post;