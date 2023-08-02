// complex state data so used useReducer
export const initialState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initialState, action) => {
  // Cases
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.userData,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default AppReducer;
