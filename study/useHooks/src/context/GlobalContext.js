import { createContext, useMemo, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const value = useMemo(
        () => ({
            name, setName,
            email, setEmail
        }),
        [
            name, setName,
            email, setEmail
        ]
    )

    return (
        <GlobalProvider.Provider value={value}>
            {props.children}
        </GlobalProvider.Provider>
    )
}

export default GlobalProvider;
