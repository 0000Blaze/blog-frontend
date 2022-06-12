import React from "react";
import Post from "../post/Post";
import "./posts.css";
import PropTypes from "prop-types";

export default function Posts({ posts }) {
    let dummy;
    return (
        <div className="posts">
            {posts.map(p => (
                <Post post={p} key={dummy} />
            ))}
        </div>
    );
}

Posts.propTypes = {
    // _id: PropTypes.any,
    // photo: PropTypes.any,
    // categories: PropTypes.array,
    // title: PropTypes.string,
    // desc: PropTypes.string,
    // createdAt: PropTypes.any,
    posts: PropTypes.any,
};
