import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isExpanded: false
}
const expandableTextSlice = createSlice({
  name: 'expandableText',
  initialState,
  reducers:{
    toggleExpand: (state) =>{
      state.isExpanded = !state.isExpanded
    }
  }
})
export const { toggleExpand } = expandableTextSlice.actions;
export default expandableTextSlice.reducer;