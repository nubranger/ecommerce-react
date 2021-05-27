import {
    PROFILE_BAR_OPEN,
    PROFILE_BAR_CLOSE
} from '../actions'

const profile_reducer = (state, action) => {
    if (action.type === PROFILE_BAR_OPEN) {
        return {...state, isProfileBarOpen: true}
    }
    if (action.type === PROFILE_BAR_CLOSE) {
        return {...state, isProfileBarOpen: false}
    }

    throw new Error(`Wrong "${action.type}" - action type`)
}

export default profile_reducer
