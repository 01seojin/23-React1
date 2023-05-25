import {useState,useCallblack} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const[theme, setTheme] = useState("light");

    const toggleTheme = useCallblack(() => {
        if(theme == "light") {
            setTheme("dark");
        }else if (theme == "dark"){
            setTheme("light");
        }
    }, [theme]);
    
    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );

}

export default DartOrLight;