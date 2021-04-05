import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF,
  SET_ERROR,
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case FETCH_SMURF_START:
      console.log("starting")
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SMURF_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        smurfs: action.payload.data,
        isFetching: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: {
          id: action.payload.data.id,
          name: action.payload.data.name,
          nickname: action.payload.data.nickname,
          position: action.payload.data.position,
          description: action.payload.data.description,
        },
      };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
