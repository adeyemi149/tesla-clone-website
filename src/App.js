import './App.css';
import Home from './Components/Home';
import React, {Suspense, lazy} from 'react';
import { useSelector } from "react-redux"
import { burgerNav } from './features/carSlice';
import styled from 'styled-components';

const Header = lazy(() => import("./Components/Header"))

function App() {
  const burgerStatus = useSelector(burgerNav)
  return (
    <Container show={burgerStatus}>
      <Suspense fallback={<div />}>
        <Header />
      </Suspense>
        <Home />
      </Container>
  );
}

const Container = styled.div`
  overflow: ${props => props.show ? "hidden" : ""};
`

export default App;
