import React from "react";
import { Card } from 'semantic-ui-react';

const StarCard = props => {
    console.log(props);
    return (
        <Card
            image='https://i5.walmartimages.com/asr/b48921e9-9e73-41af-b5df-2435b7d57a40_3.d5426e20dc8bb86d3fe77e061fedcf6e.jpeg?odnWidth=200&odnHeight=200&odnBg=ffffff'
            key={props.id}
            header={props.character}
            description={props.birthyear}
            extra={props.height}
        />
    );
};

export default StarCard;