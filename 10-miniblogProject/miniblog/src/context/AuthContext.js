import { useContext, createContext} from 'react'

const AuthConstext = createContext()

export function AuthProvider({children, value}) {
    return <AuthConstext.Provider value={value}>{children}</AuthConstext.Provider>
}

export function useAuthValue() {
    return useContext(AuthConstext)
}