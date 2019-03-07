export const selectLibrary = libraryId => {
  // is the id that we want to select.
  return {
    type: "select_library", // an object with a type property is an action and the action is how we ask the reducers to update the data that they produce.
    payload: libraryId
  };
};
