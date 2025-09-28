import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import MainLayout from "../Layouts/MainLayout.jsx";
import CreatePost from "../Pages/CreatePost/CreatePost.jsx";
import AuthPage from "../Pages/AuthPage/AuthPage.jsx";

const appRoutes = createBrowserRouter([
    {
    path: "/", element: <MainLayout/>,
    children: [
        {index: true, element: <App/>},
        {path: "/create-post", element: <CreatePost/>},
        {path: "/auth", element: <AuthPage/>}
    ]
    },
])
export default appRoutes