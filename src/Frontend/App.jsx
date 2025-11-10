import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import checkIsAuthorized from "./Tools/checkIsAuthorized.js"
import Home from "./Pages/Home/Home.jsx";

export default function App(){
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const callCheckIsAuthorized = async () => {
            const result = await checkIsAuthorized()
            result.authorized ? setIsAuthorized(true) : alert(result.message)
        }
        callCheckIsAuthorized()
    }, []);

    return (
         isAuthorized ? <Home/> : <Navigate to={'/auth'} replace={true}/>
    )
}