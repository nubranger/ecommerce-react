import React, {useContext, useReducer} from 'react'
import reducer from '../reducers/profile_reducer'
import {
    PROFILE_BAR_OPEN,
    PROFILE_BAR_CLOSE
} from '../actions'

const initialState = {
    isProfileBarOpen: false,
}

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openProfileBar = () => {
        dispatch({type: PROFILE_BAR_OPEN})
    }
    const closeProfileBar = () => {
        dispatch({type: PROFILE_BAR_CLOSE})
    }

    return (
        <ProfileContext.Provider
            value={{
                ...state,
                openProfileBar,
                closeProfileBar,
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    return useContext(ProfileContext)
}
