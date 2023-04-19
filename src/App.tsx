import './App.css';
import Home from './Components/Home';
import React, {Suspense, lazy} from 'react';
import { useSelector } from "react-redux"
import { burgerNav } from './features/carSlice';
import styled from 'styled-components';

const Header = lazy(() => import("./Components/Header"))

type showProps = {
  show: string
}

const App = () => {
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

const Container = styled.div<showProps>`
  overflow: ${props => props.show ? "hidden" : ""};
`

export default App;
