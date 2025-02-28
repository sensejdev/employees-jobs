import { APP_ACTIONS } from "modules/app/actions";

function getInitialState() {
  return {
    selectedJob: null,
  };
}

const INITIAL_STATE = getInitialState();

const stateActionMapping = {
  [APP_ACTIONS.APP_FILTER_EMPLOYEES]: (state, action) => {
    return {
      ...state,
      selectedJob: action.payload,
    };
  },
};

const appReducer = (state = INITIAL_STATE, action) => {
  return stateActionMapping[action.type]
    ? stateActionMapping[action.type](state, action)
    : state;
};

export default appReducer;
