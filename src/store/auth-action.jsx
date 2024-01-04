import axios from "axios";
import { authActions } from "./auth-slice";
import { uiActions } from "./ui-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const signUpRequest = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();
    bodyFormData.append("FirstName", userData.FirstName);
    bodyFormData.append("LastName", userData.LastName);
    if (userData.Email) {
      bodyFormData.append("Email", userData.Email);
      bodyFormData.append("Password", userData.Password);
      bodyFormData.append("ConfirmPassword", userData.ConfirmPassword);
    }
    if (userData.Mobile) {
      userData.Mobile && bodyFormData.append("Mobile", userData.Mobile);
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
        if (userData.Password && userData.Email) {
          dispatch(loginRequest(userData));
        }
        if (userData.Mobile) {
          dispatch(authActions.addUserMobileNumber(userData.Mobile));
          dispatch(uiActions.sendUserToOtpPage(true));
        }
        //    dispatch(loginRequest(userData.Email, userData.Password));
      })

      .catch(function (error) {
        dispatch(authActions.toggleAuthLoading(true));
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
        dispatch(authActions.toggleAuthLoading(false));
        if (userData.Email) {
          //get token and login user
          dispatch(authActions.login(response.data.token));
        }
        if (userData.Mobile) {
          dispatch(authActions.addUserMobileNumber(userData.Mobile));
          dispatch(uiActions.sendUserToOtpPage(true));
        }
        //  dispatch(
        //    uiActions.toggleSuccessModal({
        //      show: true,
        //      desc: `${Email} خوش آمدید!`,
        //    })
        //  );
      })

      .catch(function (error) {
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
export const verifyOtp = ({ OtpToken, PhoneNumber }) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();

    bodyFormData.append("OtpToken", OtpToken);
    bodyFormData.append("PhoneNumber", PhoneNumber);

    axios({
      method: "POST",
      url: `${apiUrl}/Identity/VerifyOtp`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        //    dispatch(authActions.login(response.data.token));
        dispatch(authActions.toggleAuthLoading(false));
        dispatch(authActions.sendUserToMainPage(true));
        // if (response.response?.status === 200) {
        dispatch(authActions.login(response.data.token));
        // }
        //  dispatch(
        //    uiActions.toggleSuccessModal({
        //      show: true,
        //      desc: `${Email} خوش آمدید!`,
        //    })
        //  );
        // dispatch(uiActions.showWarning('asda'))
      })

      .catch(function (error) {
        dispatch(authActions.toggleAuthLoading(true));
        setTimeout(() => {
          dispatch(authActions.toggleAuthLoading(false));
        }, 2000);
        if (error.response?.status === 415 || 400) {
          dispatch(
            authActions.showLoginWarning({ OtpToken: error.response.data })
          );
        }
      });
    //  dispatch(uiActions.showWarning(response.response.data));
  };
};
