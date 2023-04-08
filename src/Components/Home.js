import React from 'react'
import { Suspense, lazy } from 'react'
import styled from 'styled-components'
import Sections from "./Section"

const Section = lazy(() => import("./Section"))

function Home() {
	return (
		<>
	  <Container>
		<Section
		title="Model Y"
		Description = "View Inventory"
		backgroundimg = "model-y.webp"
		leftBtn = "Order Now"
		rightBtn="Demo Drive"
		downArrow = "images/down-arrow.svg"
		/>
	<Suspense fallback={<div />}>
	<Sections  
	title = "Model 3"
	Description = "Leasing starting at $349/mo"
	backgroundimg = "model-3.webp"
	leftBtn = "Order Now"
		rightBtn="Demo Drive"
	/>
	</Suspense>
	<Suspense fallback={<div />}>
    <Section 
	title="Model S"
	Description = "View Inventory"
	backgroundimg = "model-s.webp"
	leftBtn = "Order Now"
		rightBtn="Demo Drive"
	/>
	</Suspense>
	<Suspense fallback={<div />}>
    <Section 
	title="Model X"
	Description = "View Inventory"
	backgroundimg = "model-x.webp"
	leftBtn = "Order Now"
		rightBtn="Demo Drive"
	/>
	</Suspense>
	<Suspense fallback={<div />}>		  
    <Section 
	title="Solar Panels"
	Description = "Low Cost Solar Panels in America"
	backgroundimg = "solar-roof.webp"
	leftBtn = "Order Now"
		rightBtn="Demo Drive"
	/>
	</Suspense>
	<Suspense fallback={<div />}>		  
    <Section 
	title="Accessories"
	backgroundimg = "accessories.webp"
	leftBtn = "Shop now"
	/>
	</Suspense>
			</Container>
			</>
  )
}

export default Home

const Container = styled.div`
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`

const Ads = styled.div`
	height: 10vh;
	background: white;
`