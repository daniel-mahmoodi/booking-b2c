import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  token: ``,
  mobileNumber: "",
  openOtpPage: false,
  isLoggedIn: false,
  isAgancyApproved: true,
  agancyDataDesc: "",
  signUpWarning: {},
  loginWarning: {},
  authLoading: false,
  sendUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    showSignUpWarning(state, action) {
      state.signUpWarning = action.payload;
    },
    showLoginWarning(state, action) {
      state.loginWarning = action.payload;
    },

    addUserMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },

    sendUserToMainPage(state, action) {
      state.sendUser = action.payload;
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.token = `Bearer ${action.payload}`;
      // state.token = ;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    toggleAuthLoading(state, action) {
      state.authLoading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
