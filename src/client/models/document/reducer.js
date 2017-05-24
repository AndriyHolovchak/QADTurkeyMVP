import { document_a as actions } from 'actions'

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.DOCUMENT_DATA_PENDING:
      return {
        ...state,
        ...action.payload
      }
    case actions.DOCUMENT_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case actions.DOCUMENT_DATA_FULFILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
