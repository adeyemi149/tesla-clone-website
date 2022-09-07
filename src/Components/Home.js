import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
	  <Container>
		<Section  
		title = "Model 3"
		Description = "Order Online for Touchless Delivery"
		backgroundimg = "model-3.jpg"
		leftBtn = "custom order"
		rightBtn = "Existing inventory"
		downArrow = "/images/image/down-arrow.svg"
		/>
		<Section
		title="Model Y"
		Description = "Order Online for Touchless Delivery"
		backgroundimg = "model-y.jpg"
		leftBtn = "custom order"
		rightBtn = "Existing inventory"
      	/>
      <Section 
	  title="Model S"
		Description = "Order Online for Touchless Delivery"
	  backgroundimg = "model-s.jpg"
	  leftBtn = "custom order"
		rightBtn = "Existing inventory"
	  />
      <Section 
	  title="Model X"
		Description = "Order Online for Touchless Delivery"
	  backgroundimg = "model-x.jpg"
	  leftBtn = "custom order"
		rightBtn = "Existing inventory"
	  />
      <Section 
	  title="Solar Panels"
		Description = "Produce Clean Energy From Your Roof"
	  backgroundimg = "solar-roof.jpg"
	  leftBtn = "order now"
		rightBtn = "learn more"
	  />
      <Section 
	  title="Accessories"
		Description = ""
	  backgroundimg = "accessories.jpg"
	  leftBtn = "Shop now"
	  />
	</Container>
  )
}

export default Home

const Container = styled.div`
	height: 100vh;
`
