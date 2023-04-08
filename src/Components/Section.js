import React, { useEffect, useState, Suspense, lazy } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import "../App.css"
import { useSelector } from 'react-redux';
import { burgerNav } from "../features/carSlice"
 
const Title = lazy(() => import("../Components/Title"))
const Buttons = lazy(() => import("./Buttons"))

function Section({ title, backgroundimg, Description, leftBtn, rightBtn, downArrow }) {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const burgerStatus = useSelector(burgerNav)

	if (!backgroundimg) {
		return <h1>Loading...</h1>
	}

	return (
		<Wrap 
			bgImage={backgroundimg}
			show={burgerStatus}
		>
		<Suspense fallback={<div />}>
				<Title
					title={title}
					Description={Description} 
				/>
			</Suspense>
			<Suspense fallback={<div />}>
				<Buttons
					leftBtn = {leftBtn}
					rightBtn = {rightBtn}
				/>
			</Suspense>
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

