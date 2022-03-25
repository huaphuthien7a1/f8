import * as ActionType from "../constants";
import axios from "axios";
import { URL_GET_LIST_USER } from "../urlAPI/index";
export const actFetchListUser = () => {
  return (dispatch) => {
    dispatch(actGetListUserRequest());
    axios({
      url: URL_GET_LIST_USER,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch(actGetListUserSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actGetListUserFailed(error));
      });
  };
};

const actGetListUserRequest = () => {
  return { type: ActionType.GET_LIST_USER_REQUEST };
};
const actGetListUserSuccess = (data) => {
  return { type: ActionType.GET_LIST_USER_SUCCESS, payload: data };
};

const actGetListUserFailed = (error) => {
  return { type: ActionType.GET_LIST_USER_FAILED, payload: error };
};
