import { useState } from "react";

// LocalStrage 사용 hook
export const useLocalStorage = (keyName, defaultValue) => {

    const [storeValue, setStoreValue] = useState(() => {
        try{
            const value = window.localStorage.getItem(keyName)
            if(value){
                return JSON.parse(value)
            }else{
                window.localStorage.setItem(keyName,JSON.stringify(defaultValue))
                return defaultValue
            }
        }catch(error){
            return defaultValue
        }
    })

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch(error) {
            setStoreValue(newValue)
        }
    }

    return [ storeValue, setValue ]

}
