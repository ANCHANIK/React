import { createContext, useMemo } from "react";

export const GlobalContext = createContext();

const GlobalProvider = (props) => {


    const value = useMemo(
        () => ({

        }),
        [

        ]
    );

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;
