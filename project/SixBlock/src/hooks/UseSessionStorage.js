import { useState } from "react";

// SessionStrage 사용 hook
export const UseSessionStorage = (keyName, defaultValue) => {

    const [storeValue, setStoreValue] = useState(() => {
        try{
            const value = window.sessionStorage.getItem(keyName)
            if(value){
                return JSON.parse(value)
            }else{
                window.sessionStorage.setItem(keyName,JSON.stringify(defaultValue))
                return defaultValue
            }
        }catch(error){
            return defaultValue
        }
    })

    const setValue = (newValue) => {
        try {
            window.sessionStorage.setItem(keyName, JSON.stringify(newValue))
        } catch(error) {
            setStoreValue(newValue)
        }
    }

    return [ storeValue, setValue ]

}
