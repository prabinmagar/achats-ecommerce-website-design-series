import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const selectIsSidebarOpen = (state) => state.sidebar.isSidebarOpen;
export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
