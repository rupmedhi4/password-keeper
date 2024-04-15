import React,{useState} from "react";
import PasswordContext from "./PasswordContext";

const PasswordContextProvider = ({children})=>{

    const [data,setData] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [title,setTitle] = useState()
    const [password,setPassword] = useState()
    const [searchQuery, setSearchQuery] = useState(null);


    const value = {
        data,
        setData,
        showModal,
        setShowModal,
        title,
        setTitle,
        password,
        setPassword,
        searchQuery,
        setSearchQuery,
    };
    
   
    return(
        <PasswordContext.Provider value={value}>
            {children}
        </PasswordContext.Provider>
    )
}

export default PasswordContextProvider;

// create context api step 2
