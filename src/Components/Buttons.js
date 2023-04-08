import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Buttons = ({leftBtn, rightBtn, downArrow}) => {
  return (
	<Button>
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
		  {downArrow ?
			  <DownArrow src={downArrow} />
			  : <DownArrow src="" />
		  }
	</Button>
  )
}

export default Buttons

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
	font-size: 14px; 
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
	color: black;
	animation: animate infinite 1.5s;
`

const Button = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
`