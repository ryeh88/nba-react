

export default function counter(state = null, action) {
  switch (action.type) {
    case 'SELECT_TEAM':
      return state + 1
    case 'INVALIDATE TEAM':
      return state - 1
    case 'REQUEST_TEAM':
      return state + 1
    case 'RECEIVE_TEAM':
      return state + 1
    case 'FETCH_TEAM':
      return state + 1  
    default:

      return state
  }
}