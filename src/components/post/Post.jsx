import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Post({ post }) {
    const PF = "https://rohanpersonalblog.herokuapp.com/images/";
    let dummy;
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(c => (
                        <span key={dummy} className="postCat">
                            {c.name}
                        </span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link" key={dummy}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    );
}

Post.propTypes = {
    // _id: PropTypes.any,
    // photo: PropTypes.any,
    // categories: PropTypes.array,
    // title: PropTypes.string,
    // desc: PropTypes.string,
    // createdAt: PropTypes.any,
    post: PropTypes.any,
};
