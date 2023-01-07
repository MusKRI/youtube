import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  searchResult: [],
  categories: "New",
  mobileMenu: false,
};

const appSlice = createSlice({
  name: "App",
  initialState,

  reducers: {
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setSearchResults: (state, action) => {
      state.searchResult = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectSearchResults = (state) => state.App.searchResult;

export const selectCategories = (state) => state.App.categories;

export const selectMobileMenu = (state) => state.App.mobileMenu;

export const selectLoading = (state) => state.App.loading;

export const { setCategories, setMobileMenu, setSearchResults, setLoading } =
  appSlice.actions;

export default appSlice.reducer;
