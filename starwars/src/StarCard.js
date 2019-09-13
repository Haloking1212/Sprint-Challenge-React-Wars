import React from "react";
import styled, { ThemeProvider } from 'styled-components';

const Box = styled.div`
  color: ${props => props.theme.color};
`

const StarCard = props => {
    console.log(props);
    return (
        <div className="crawl star-wars" key={props.id}>

            <ThemeProvider theme={{color:'mediumseagreen'}}>
                <Box><h3>Character: {props.character}</h3></Box>
            </ThemeProvider>
            <h2>Birthday: {props.birthyear}</h2>

        </div>
    );
};

export default StarCard;