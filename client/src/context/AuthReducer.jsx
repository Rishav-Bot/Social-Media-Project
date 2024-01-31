// Reducer function to handle state changes based on actions
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isFetching: true };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isFetching: false };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, isFetching: false };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};