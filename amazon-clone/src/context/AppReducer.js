// Total price of items
export const getBasketTotal = (basket) => {
  return basket.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};

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

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      // To return deleted item index
      const index = state.basket?.findIndex((item) => item.id === action.id);

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product {id ${action.id} as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default AppReducer;
