import { createContext, useContext } from "react"
import * as Google from "expo-google-app-auth"

import { androidClientId, iosClientId } from "../api-keys"

const initialState = {}

const AuthContext = createContext(initialState)

const config = {
    androidClientId,
    iosClientId,
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
}

const signInWithGoogle = async () => {
    const { type, accessToken, user } = await Google.logInAsync(config)
    console.log("Trying to log in....")
    if (type === "success") {
        console.log("WORKS!!!")
    } else {
        console.log("It does not work")
    }
}

/**
    HOC - High Order Component
*/
export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth
