import React from "react";
import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    let dummy;
    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT DEVELOPER</span>
                <img src="" alt="" />
                <p>
                    Hi, I am Rohan Chhetry.I am currently a computer engineering
                    student at Pulchowk campus.I would like to describe myself
                    as a hardworking, friendly and optimistic person who is
                    always ready for new challenges in life.
                </p>
            </div>
            <div className="sidebarItem">
                <spam className="sidebarTitle">CATEGORIES</spam>
                <ul className="sidebarList">
                    {console.log(cats)}
                    {cats.map(c => (
                        <Link
                            to={`/?cat=${c.name}`}
                            className="link"
                            key={dummy}
                        >
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <spam className="sidebatTitle">FOLLOW ME</spam>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
