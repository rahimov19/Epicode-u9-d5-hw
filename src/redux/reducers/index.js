const initialState = {
  weatherBulk: {
    content: { inputBar: "Hamburg" },
  },
  favs: { content: [] },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Search_Query":
      return {
        ...state,
        weatherBulk: {
          ...state.weatherBulk,
          content: action.payload,
        },
      };
    case "ADD_TO_FAV":
      return {
        ...state,
        favs: {
          ...state.favs,
          content: [...state.favs.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        favs: {
          ...state.favs,
          content: state.favs.content.filter((city, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
