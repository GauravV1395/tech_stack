import { combineReducers } from "redux"; // to get reference to all the reducers that would be created in the future.
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
  libraries: LibraryReducer, // the combine reducers takes in all the reducers and makes them work together nicely.
  selectedLibraryId: SelectionReducer
});
