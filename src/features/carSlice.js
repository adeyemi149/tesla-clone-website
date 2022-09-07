import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cars: ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"],
	burgerStatus: false
}

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {
		burgerStateToTrue(state) {
			state.burgerStatus = true
		},
		burgerStateToFalse(state) {
			state.burgerStatus = false
		}
	}
})

export const selectCars = state => state.car.cars
export const burgerNav = state => state.car.burgerStatus

export const actions = carSlice.actions

export default carSlice.reducer