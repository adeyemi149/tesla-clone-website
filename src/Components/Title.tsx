import React from 'react'
import styled from 'styled-components'
const Fade = require("react-reveal/Fade");

type Props = {
	title?: string,
	Description?: string
}

type descProp = {
	description?: string
}

const Title: React.FC<Props> = ({ title, Description }) => {
	return (
		<Fade bottom>
			<ItemText description={Description}>
				<h1>{title}</h1>
				<p>{Description}</p>
			</ItemText>
		</Fade>
	)
}

export default Title

const ItemText = styled.div<descProp>`
	padding-top: 15vh;
	text-align: center;

	h1 {
		letter-spacing: 3px;
	}

	p {
		text-decoration: ${props => props.description == "View Inventory" ? "underline" : "none"};
	}
`