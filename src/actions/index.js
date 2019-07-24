export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = newFeature => dispatch => {
  console.log(newFeature);
  dispatch({ type: ADD_FEATURE, payload: newFeature });
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = removedFeature => dispatch => {
  dispatch({ type: REMOVE_FEATURE, payload: removedFeature.id });
};
