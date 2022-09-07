import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import "../App.css"
import { useSelector } from 'react-redux';
import { burgerNav } from "../features/carSlice"
 
function Section({ title, backgroundimg, Description, leftBtn, rightBtn, downArrow }) {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const burgerStatus = useSelector(burgerNav)

	return (
		<Wrap 
			bgImage={backgroundimg}
			style={{ transform: `translateY(${offsetY * 0.4}px)` }}
			show={burgerStatus}
		>
		<Fade bottom>
			<ItemText>
				<h1>{title}</h1>
				<p>{Description}</p>
			</ItemText>
		</Fade>
		<Buttons>
		<Fade bottom>
			<ButtonGroup>
				<LeftButton>
					{leftBtn}
				</LeftButton>
				{rightBtn && <RightButton>
					{rightBtn}
				</RightButton>}
			</ButtonGroup>
		</Fade>
		<DownArrow src="/images/down-arrow.svg" />
		</Buttons>
		</Wrap>		
  )
}

export default Section

const Wrap = styled.div `
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between; 
	align-items: center;
	background-image: ${props => `url("/images/${props.bgImage}")`};
	filter: ${prop => prop.show ? "blur(8px)" : ""};
	transition: all 800ms;
`

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonGroup = styled.div`
	display:flex;
	gap: 50px;
	margin-bottom: 0px;

	@media (max-width: 768px) {   
		flex-direction: column;
		gap: 20px;
	}
`

const LeftButton = styled.div`
	background-image: linear-gradient(to right, #515253, #4f5152, #4e5050, #4d4f4e, #4d4e4c);
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	color: white;
	height: 40px;
	width: 256px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	text-transform: uppercase;
	font-size: 12px; 
	word-spacing: .1rem;
	letter-spacing: .1rem;
	font-weight: 700;
	cursor: pointer;
	opacity: 1.85;
`

const RightButton = styled(LeftButton)`
	background: white;
	color: black;
	opacity: 0.65;
`

const DownArrow = styled.img`
	height: 40px;
	margin-top: 20px;
	animation: animate infinite 1.5s;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 15px;
`