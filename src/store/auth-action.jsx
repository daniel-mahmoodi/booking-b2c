import axios from "axios";
import { authActions } from "./auth-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const signUpRequest = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();
    bodyFormData.append("FirstName", userData.FirstName);
    bodyFormData.append("LastName", userData.LastName);
    userData.Mobile && bodyFormData.append("Mobile", userData.Mobile);
    if (userData.Email) {
      bodyFormData.append("Email", userData.Email);
      bodyFormData.append("Password", userData.Password);
      bodyFormData.append("ConfirmPassword", userData.ConfirmPassword);
    }
    axios({
      method: "POST",
      url: `${apiUrl}/Identity/SignUp`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(authActions.toggleAuthLoading(false));
        //handle success
        console.log(response);
        if (userData.Password && userData.Email) {
          dispatch(loginRequest(userData));
        }
        //    dispatch(loginRequest(userData.Email, userData.Password));
      })

      .catch(function (error) {
        dispatch(authActions.toggleAuthLoading(true));
        console.log("error", error.response);
        setTimeout(() => {
          dispatch(authActions.toggleAuthLoading(false));
        }, 2000);
        if (error.response?.status === 415)
          dispatch(authActions.showSignUpWarning(error.response.data));
      });
  };
};
export const loginRequest = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();
    if (userData.Email) {
      bodyFormData.append("Email", userData.Email);
      bodyFormData.append("Password", userData.Password);
    }
    if (userData.Mobile) {
      bodyFormData.append("Mobile", userData.Mobile);
    }
    axios({
      method: "POST",
      url: `${apiUrl}/Identity/SignIn`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        //    dispatch(authActions.login(response.data.token));
        console.log("response", response);
        dispatch(authActions.toggleAuthLoading(false));
        if(userData.Mobile &&response.response.status===204){
          // send user to add otp
        }
        //  dispatch(
        //    uiActions.toggleSuccessModal({
        //      show: true,
        //      desc: `${Email} خوش آمدید!`,
        //    })
        //  );
        // dispatch(uiActions.showWarning('asda'))
      })

      .catch(function (error) {
        console.log(error);
        dispatch(authActions.toggleAuthLoading(true));
        setTimeout(() => {
          dispatch(authActions.toggleAuthLoading(false));
        }, 2000);
        if (error.response?.status === 415)
          dispatch(authActions.showLoginWarning(error.response.data));
      });
    //  dispatch(uiActions.showWarning(response.response.data));
  };
};
