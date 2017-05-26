import { document_a as actions } from 'actions'

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATING_DOCUMENT:
      return {
        ...state,
        ...action.payload
      }
    case actions.DOCUMENTS_DATA_FULFILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
