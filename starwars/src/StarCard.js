import React from "react";

const StarCard = props => {
    console.log(props);
    return (
        <div className="film-list" key={props.id}>
            <h3>Character: {props.character}</h3>
            <h2>Birthday: {props.birthyear}</h2>
        </div>
    );
};

export default StarCard;