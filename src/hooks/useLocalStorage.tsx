import { useState } from "react"

export const useLocalStorage = (keyName:string, defaultName:string | null) => {
    const [user, setStorageValue] = useState(() => {
        // Коллбек который проверяет наличие свойства в локальном хранилище и устанавливает дефолтное значение
        console.log('set default')
        try{
            const value = window.localStorage.getItem(keyName)            
            if (value) {
                return JSON.parse(value)
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultName))
                return defaultName
            }

        } catch(err) {
            return defaultName
        }
    })

    const setValue = (newValue:string) => {
        console.log('newValue', newValue)
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch(err) {
            console.log(err)
        }
        setStorageValue(newValue)
    }
    
    return [user, setValue]
}