import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import React from 'react';
import { useSelector } from "react-redux"
import { burgerNav } from './features/carSlice';
import styled from 'styled-components';

function App() {
  const burgerStatus = useSelector(burgerNav)

  return (
    <Container show={burgerStatus}>
      <Header />
      <Home />
    </Container>
  );
}

const Container = styled.div`
  overflow: ${props => props.show ? "hidden" : ""};
`

export default App;
