import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/carSlice';
import { burgerNav } from '../features/carSlice';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/carSlice"

function Header() {
  const cars = useSelector(selectCars)
  const burgerStatus = useSelector(burgerNav)
  const dispatch = useDispatch()
  const setBurgerStatusTrue = () => {
    dispatch(actions.burgerStateToTrue())
  }
  const setBugerStatusToFalse = () => {
    dispatch(actions.burgerStateToFalse())
  }
  return (
    <Container>
      <Wrap show={burgerStatus}>
        <a href="/">
          <img src="/images/logo.svg" alt='' />
        </a>
        <Menu>
            {cars?.map((car, index) =>
              (<li><a key={index} href='#'>{car}</a></li>)
            )}
        </Menu>
        <RightMenu>
          <Hide>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          </Hide>
          <CustomMenu onClick={setBurgerStatusTrue}>Menu</CustomMenu>
        </RightMenu>
      </Wrap>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={setBugerStatusToFalse} />
        </CloseWrapper>
        <Scroll>
        {cars && cars.map((car, index) => (
            <li><a key={index} href='#'>{car}</a></li>
          ))}
          <li><a href='#'>Existing inventory</a></li>
          <li><a href='#'>Used inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadaster</a></li>
          <li><a href='#'>Charging</a></li>
          <li><a href='#'>Powerwall</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Account</a></li>
          </Scroll>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`

const Wrap = styled.div`
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
   	filter: ${prop => prop.show ? "blur(8px)" : ""};
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  list-style-type: none;
  padding-left: 5.5rem;
  word-spacing: 5px;


  a {
    padding: 10px 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
    position: relative;
    font-size: 15px;
    flex-wrap: nowrap;
    width: 100;
  }

  a:hover {
    color: rgb(0, 0, 0);
  }

  a::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 5px;
  }

  a:hover::before {
    animation: anime 287ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @keyframes anime {
    0% {
      width: 0%;
      height: 1px;
      left: 50%;
    }
    50% {
      width: 100%;
      height: 1px;
      left: 0;
    }
    100% {
      width: 100%;
      height: 100%;
      left: 0;
    }
  }

  @media (max-width: 1157px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  
  a {
    margin-right: 10px;
    font-weight: 600;
    position: relative;
    padding: 10px;
    word-spacing: 8px;
    font-size: 15px;
    color: black;
  }

  a:hover {
    color: rgb(0, 0, 0);
  }

  a::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 5px;
  }

  a:hover::before {
    animation: anime 287ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @keyframes anime {
    0% {
      width: 0%;
      height: 1px;
      left: 50%;
    }
    50% {
      width: 100%;
      height: 1px;
      left: 0;
    }
    100% {
      width: 100%;
      height: 100%;
      left: 0;
    }
  }
`

const CustomMenu = styled.div`
  cursor: pointer;
 padding: 10px 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
    position: relative;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 5px;

   @media (min-width: 1150px) {
    background: none;

    &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 5px;
  }

  &:hover::before {
    animation: anime 287ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @keyframes anime {
    0% {
      width: 0%;
      height: 1px;
      left: 50%;
    }
    50% {
      width: 100%;
      height: 1px;
      left: 0;
    }
    100% {
      width: 100%;
      height: 100%;
      left: 0;
    }
  }
   }

`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform .45s ease-out;
  z-index: 999;

  li{
    padding: 10px 20px;
    border-radius: 5px;
    -webkit-transition: all 0.5s 0s ease;
    -moz-transition: all 0.5s 0s ease;
    -o-transition: all 0.5s 0s ease;
    transition: all 0.5s 0s ease;
    cursor: pointer;

    a {
      font-weight: 600;
      color: rgba(83, 83, 83);
    }
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 320px) {
      width: 220px;
      overflow-y: auto;
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  overflow: hidden;
  z-index: 999;
  position: absolute;
  padding: 9px;
  border-radius: 10px;
  

  &:hover {
      background-color: rgba(0, 0, 0, 0.05);
  }
`

const CloseWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 1rem;
  padding: 20px 5px 50px;
  -webkit-transition: all 0.5s 0s ease;
    -moz-transition: all 0.5s 0s ease;
    -o-transition: all 0.5s 0s ease;
    transition: all 0.5s 0s ease;
`

const Hide = styled.div`
  @media (max-width: 1150px) {
    display: none;
  }
`

const Scroll = styled.div`
  position: relative;
  overflow: auto;
  padding: 0 20px;
`