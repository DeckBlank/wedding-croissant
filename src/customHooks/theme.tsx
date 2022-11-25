import { useState } from "react"

export const useTheme   = () =>{
    const [theme,setTheme] = useState(getTheme())

    function getTheme() {
        const value:string|null = window.localStorage.getItem(`theme`);
        if(value===null)
            return (window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`ligth`);
        return value
    }
    
    const changeTheme = () => {
        const value = theme==`dark`?`ligth`:`dark`;
        setTheme(value);
        window.localStorage.setItem(`theme`,value);
    }
    
    
    return{
        changeTheme,
        theme
    }
}