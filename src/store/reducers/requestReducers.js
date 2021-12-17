import { REQUEST_TYPES } from "../actions/requestActions"

const requestInitState={
  requests:[]
}

function requestReducer(state,action){
  switch (action.type) {
    case REQUEST_TYPES.CREATE:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      }
    case REQUEST_TYPES.UPDATE:
      const updatedRequest = action.payload;
      const updatedRequests = state.requests.map((request) => {
        if (request.id === updatedRequest.id) {
          return updatedRequest;
        }
        return request;
      })
      return {
        ...state,
        requests: updatedRequests
      }
    case REQUEST_TYPES.DELETE:
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.id !== action.payload
        )
      }
    default:
      return state;
  }
}

export {requestReducer,requestInitState}