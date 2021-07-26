import React from "react";

function Card(props:{title:string, imgURL:string, telephoneNo:string, email:string}) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.title}</h2>
                <img
                    className="circle-img"
                    src={props.imgURL}
                    alt="avatar_img"
                />
            </div>
            <div className="bottom">
                <p className="info">{props.telephoneNo}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;