import React, { useEffect, useState, Suspense, lazy } from 'react'
import styled from 'styled-components'
import "../App.css"
import { useSelector } from 'react-redux';
import { burgerNav } from "../features/carSlice"
const Fade = require("react-reveal/Fade");

const Title = lazy(() => import("./Title"))
const Buttons = lazy(() => import("./Buttons"))

type Props = {
	title?: string,
	backgroundimg?: string,
	Description?: string,
	leftBtn?: string,
	rightBtn?: string,
	downArrow?: string,
	show?: string,
	bgImage?: string
}

const Section: React.FC<Props> = ({ title, backgroundimg, Description, leftBtn, rightBtn, downArrow }) => {
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
					leftBtn={leftBtn}
					rightBtn={rightBtn}
					downArrow={downArrow}
				/>
			</Suspense>
		</Wrap>
	)
}

export default Section

const Wrap = styled.div<Props>`
	height: 100vh;
	scroll-snap-align: start;
	scroll-snap-stop: always;
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

