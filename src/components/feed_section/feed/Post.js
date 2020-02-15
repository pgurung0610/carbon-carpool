import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  const { id, ride_provider, ride_getter } = post;

  return (
    <li className="post">
        <div className="post-description">
          <section className="post-details">
              <div className="movie-year">
                <span className="title">Ride Provider:</span>
                <span>{ride_provider}</span>
              </div>
              <div className="movie-year">
                <span className="title">Ride Getter:</span>
                <span>{ride_getter}</span>
              </div>
            </section>
        </div>
    </li>
  );
};

export default Post;