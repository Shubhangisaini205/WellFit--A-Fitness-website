import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    userData: [],
    isAuth: false,
}
interface actiontype {
    type: string,
    payload: string
}
export const reducer = (state = initialState, action: actiontype) => {
    const { type, payload } = action
    switch (type) {
        case SIGNUP_REQUEST:
            return { ...state, isLoading: true }
        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false,userData:payload }
        case SIGNUP_FAILURE:
            return { ...state, isLoading: false,isError:true }
            default: return state
    }



}
