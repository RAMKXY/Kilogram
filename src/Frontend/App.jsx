import { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";

export default function App(){
    const [isLogged, setIsLogged] = useState(false)

    return(
         isLogged ? <Home/> : <Navigate to={'/auth'} replace={true}/>
    )
}