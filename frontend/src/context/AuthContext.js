import { createContext, useReducer } from "react";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
    switch( action.type ) {
        case 'LOG_IN':
            return {owner : action.payload}
        case 'LOG_OUT' :
            return {owner : null}
        default:
            return state;
    } 
}

export const AuthContextProvider = ( { children } ) => {
    const [state, dispatch] = useReducer( authReducer, {
        user: null
    });

    console.log("auth context state: ", state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}