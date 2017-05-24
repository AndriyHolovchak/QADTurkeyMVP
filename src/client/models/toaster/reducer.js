import { toast_a as actions } from 'actions'

const initialState = {
    message: "",
    title: ""
}
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.RECEIVE_MESSAGE:
            return {
                ...state, 
                ...action.payload
            };
        default:
            return state;
    }
}
