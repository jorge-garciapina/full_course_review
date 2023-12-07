import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartDataState {
  dataPoints: number[];
}

const initialState: ChartDataState = {
  dataPoints: [],
};

export const chartDataSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    addDataPoints: (state, action: PayloadAction<number[]>) => {
      state.dataPoints = [...state.dataPoints, ...action.payload];
    },
  },
});

export const { addDataPoints } = chartDataSlice.actions;

export default chartDataSlice.reducer;
