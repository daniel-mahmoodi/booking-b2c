import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  token: "",
  mobileNumber: "",
  openOtpPage: false,
  isLoggedIn: false,
  isAgancyApproved: true,
  agancyDataDesc: "",
  signUpWarning: {},
  loginWarning: {},
  authLoading: false,
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
    login(state, action) {
      state.isLoggedIn = true;
      state.token = `Bearer ${action.payload}`;
      // state.token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJjbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDkxODk3NTU2NzUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzMmE3YjdhOS0xN2Q5LTQwOGMtOGNmMi05YzNiZmY2OGNkY2QiLCJqdGkiOiI5ODY4YjU0YS1jNjUzLTQ0MjctOTMyOS1lODk5MzllMzIwMmMiLCJleHAiOjE2OTczMDIwMTAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA1OC8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwNTgvIn0.ZV0M7pUs7FL83LARD-b-ph58eZkzMwQlQl8dhmU5j38`;
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
