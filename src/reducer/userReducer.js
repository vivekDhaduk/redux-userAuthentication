const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        items: [...state.items, action.payload],
        // users:[localStorage.setItem("users", JSON.stringify(state))]
      };
    case "LOGIN_USER":
      return {
        ...state,
        auth: [state.auth = action.payload]
      };
    case "LOGOUT_USER":
      return {
        ...state,
        auth: [state.auth = false]
    };

    default:
      return state;
  }
};

export default userReducer;
