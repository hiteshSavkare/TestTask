import * as TYPE from "../types/types";
import { cuisineTypes } from "../../utils/mock";

const initialState = {
  cuisines: cuisineTypes,
  recipies: [],
  isLoading: false,
};

const food = (state = initialState, action) => {
  switch (action.type) {
    //Get Cuisine setup
    case TYPE.CUISINE.ON_CUISINE_REQUEST:
      return { ...state, isLoading: true, error: false };
    case TYPE.CUISINE.ON_CUISINE_SUCCESS:
      return { ...state, cuisines: action.payload };
    case TYPE.CUISINE.ON_CUISINE_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    //GET RECIPIES setup
    case TYPE.RECIPIES.GET_RECIPIES_REQUEST:
      return { ...state, isLoading: true, error: false };
    case TYPE.RECIPIES.GET_RECIPIES_SUCCESS:
      return { ...state, isLoading: false, recipies: action.payload };
    case TYPE.RECIPIES.GET_RECIPIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default food;
