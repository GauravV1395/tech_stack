export default (state = null, action) => {
  //the fat arrow function will act as the reducer.
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
  // when redux boots up, the value retuned will be null. Redux cannot hold value to be undefined or if a value is given that row will be preselected, hence we will set it to null.
};
