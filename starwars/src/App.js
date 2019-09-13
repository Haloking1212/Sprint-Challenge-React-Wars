import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import StarCard from "./StarCard";
import { Container } from 'semantic-ui-react';
import styled, { ThemeProvider } from 'styled-components';

const Box = styled.div`
  color: ${props => props.theme.color};
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  useEffect (() => {
    axios.get("https://swapi.co/api/people") 
    .then(response => {
    const data = response.data.results;
      console.log(data)
      setData(data);
    });
    }, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">

      <Container className="container">
        <ThemeProvider theme={{color:'mediumseagreen'}}>
        <h1><Box className="Header">React Wars</Box></h1>
        </ThemeProvider>
        </Container>
      {data.map(dayta => {
        return (
          <StarCard 
            key={dayta.id}
            birthyear={dayta.birth_year}
            character={dayta.name}
          />
        )
      })}
    </div>
  );
}

export default App;


