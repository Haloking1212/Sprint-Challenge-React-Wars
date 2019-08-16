import React from "react";

const StarCard = props => {
    console.log(props);
    return (
        // <section className="star-wars">
        <div className="crawl star-wars" key={props.id}>
            <h3>Character: {props.character}</h3>
            <h2>Birthday: {props.birthyear}</h2>
        </div>
        // </section>
    );
};

export default StarCard;