import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

const Title = ({title, Description}) => {
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

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;

	h1 {
		letter-spacing: 3px;
	}

	p {
		text-decoration: ${props => props.description == "View Inventory" ? "underline" : "none" };
	}
`