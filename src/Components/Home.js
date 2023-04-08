import React from 'react'
import { Suspense, lazy } from 'react'
import styled from 'styled-components'
import Sections from "./Section"

const Section = lazy(() => import("./Section"))

function Home() {
  return (
	<Container>
	<Sections  
	title = "Model 3"
	Description = "Order Online for Touchless Delivery"
	backgroundimg = "model-3.webp"
	leftBtn = "View Inventory"
	rightBtn = "Custom Order"
	downArrow = "/images/image/down-arrow.svg"
	/>
	<Suspense fallback={<div />}>
	<Section
	title="Model Y"
	Description = "Order Online for Touchless Delivery"
	backgroundimg = "model-y.webp"
	leftBtn = "View Inventory"
	rightBtn = "Custom Order"
	/>
	</Suspense>
	<Suspense fallback={<div />}>
    <Section 
	title="Model S"
	Description = "Order Online for Touchless Delivery"
	backgroundimg = "model-s.webp"
	leftBtn = "View Inventory"
	rightBtn = "Custom Order"
	/>
	</Suspense>
	<Suspense fallback={<div />}>
    <Section 
	title="Model X"
	Description = "Order Online for Touchless Delivery"
	backgroundimg = "model-x.webp"
	leftBtn = "View Inventory"
	rightBtn = "Custom Order"
	/>
	</Suspense>
	<Suspense fallback={<div />}>		  
    <Section 
	title="Solar Panels"
	Description = "Produce Clean Energy From Your Roof"
	backgroundimg = "solar-roof.webp"
	leftBtn = "order now"
	rightBtn = "learn more"
	/>
	</Suspense>
	<Suspense fallback={<div />}>		  
    <Section 
	title="Accessories"
	Description = "Order now"
	backgroundimg = "accessories.webp"
	leftBtn = "Shop now"
	/>
	</Suspense>
	</Container>
  )
}

export default Home

const Container = styled.div`
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`
