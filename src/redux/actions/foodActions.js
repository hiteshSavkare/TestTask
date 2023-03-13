import * as TYPE from '../types/types'

export const cuisineRequest = () => {
    return (dispatch) => {
      dispatch({
        type: TYPE.CUISINE.ON_CUISINE_REQUEST,
      });
    };
  };
  
  export const cuisineSuccess = (payload) => {
    return (dispatch) => {
      dispatch({
        type: TYPE.CUISINE.ON_CUISINE_SUCCESS,
        payload,
      });
    };
  };
  
  export const cuisineFailer = (payload) => {
    return (dispatch) => {
      dispatch({
        type: TYPE.CUISINE.ON_CUISINE_ERROR,
        payload,
      });
    };
  };

  export const getRecipiesRequest = (payload) => {
    return (dispatch) => {
      dispatch({
        type: TYPE.RECIPIES.GET_RECIPIES_REQUEST,
        payload,
      });
    };
  };

  export const getRecipiesSuccess= (payload) => {
    return (dispatch) => {
      dispatch({
        type: TYPE.RECIPIES.GET_RECIPIES_SUCCESS,
        payload,
      });
    };
  };
  
  export const getRecipiesFailer= (payload) => {
    return (dispatch) => {
      dispatch({
        type: TYPE.RECIPIES.GET_RECIPIES_ERROR,
        payload,
      });
    };
  };
  