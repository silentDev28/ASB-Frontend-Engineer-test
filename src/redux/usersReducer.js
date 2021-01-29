const InitState = {
  users: null,
};
const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "user_data":
      return {
        users: action.data,
      };

    default:
      return state;
  }
};

export default userReducer;
