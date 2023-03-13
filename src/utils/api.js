import API from "../utils/apiConfig";
import * as apiUtils from "./const";

const hostUrl = `${apiUtils.baseUrl}?app_id=${apiUtils.app_id}&app_key=${apiUtils.app_key}`;

export const getRecipies = async (filterQuery) => {
  return await API.get(`${hostUrl}&${filterQuery}`);
};
