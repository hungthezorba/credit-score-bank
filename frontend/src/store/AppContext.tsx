import { createContext } from 'react'

export interface AppContextInterface {
    authenticated: boolean,
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

export default AppContext