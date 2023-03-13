import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPE from "../types/types";
import { getRecipies } from "../../utils/api";
import {
  getRecipiesFailer,
  getRecipiesSuccess,
  cuisineSuccess,
} from "../actions/foodActions";

/**
 * getCuisines is for get call of cuisineType
 * but as per discussion with EDAMAM there no seperate call available for it
 */
function* getCuisines() {
  try {
    // const response = yield call(getRecipies, `type=any&cuisineType=${cuisineType}`);
    yield put(cuisineSuccess(response));
  } catch (e) {
    // this can be well managed based on backend errors in live app
    getRecipiesFailer(e);
  }
}

/**
 *
 * @param {*} action
 * call to get recipies of selected cuisineType
 */
function* getRecipiesData(action) {
  try {
    const cuisineType = action.payload;
    const response = yield call(
      getRecipies,
      `type=any&cuisineType=${cuisineType}`
    );
    yield put(getRecipiesSuccess(response.hits));
  } catch (e) {
    // this can be well managed based on backend errors in live app
    yield put(getRecipiesFailer(e));
  }
}

export default function* root() {
  yield takeLatest(TYPE.CUISINE.ON_CUISINE_REQUEST, getCuisines);
  yield takeLatest(TYPE.RECIPIES.GET_RECIPIES_REQUEST, getRecipiesData);
}
