import {createSlice} from "@reduxjs/toolkit";

const state = {
  value:0
}
export const testSlice = createSlice({
  name:'testSlice',
  initialState:state,
  reducers:{
    testClick: state => {
      state.value += 1;
    }
  }
})
export const {testClick} = testSlice.actions;
export default testSlice.reducer;
