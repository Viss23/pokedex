import {
  FETCH_DATA,
  FETCH_POSSIBLE_TYPES,
  ADD_TYPE_TO_FILTER,
  REMOVE_TYPE_FROM_FILTER,
} from "./actionTypes";

export const fetchData = (limit, offset) => {
  return {
    type: FETCH_DATA,
    payload: { limit, offset },
  };
};

export const fetchPossibleTypes = () => {
  return {
    type: FETCH_POSSIBLE_TYPES,
  };
};

export const addTypeToFilter = (type) => {
  return {
    type: ADD_TYPE_TO_FILTER,
    payload: { type },
  };
};

export const removeTypeFromFilter = (type) => {
  return {
    type: REMOVE_TYPE_FROM_FILTER,
    payload: { type },
  };
};
