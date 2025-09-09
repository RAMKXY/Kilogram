import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import CreatePost from "../Pages/CreatePost/CreatePost.jsx";

const appRoutes = createBrowserRouter([
    {
    path: "/", element: <MainLayout/>,
    children: [
        {index: true, element: <Home/>},
        {path: "/create-post", element: <CreatePost/>}
    ]
    },
])
export default appRoutes