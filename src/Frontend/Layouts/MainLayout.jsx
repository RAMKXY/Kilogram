import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css"
import NavigationLink from "./Components/NavigationLink/NavigationLink.jsx";
import SiteTitle from "./Components/SiteTitle/SiteTitle.jsx";

export default function MainLayout(){
    return(
        <>
            <header className={styles.Header}>
                <div className={styles.content}>
                    <SiteTitle to={"/"}>
                        Blog
                    </SiteTitle>

                    <NavigationLink to={"/create-post"}>
                        Create post
                    </NavigationLink>
                </div>
            </header>

            <Outlet/>

        </>
    )
}