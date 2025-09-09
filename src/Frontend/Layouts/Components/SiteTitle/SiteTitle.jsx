import {Link} from "react-router-dom";
import styles from "./SiteTitle.module.css"

export default function SiteTitle({ children, to }){
    return(
        <Link className={styles.SiteTitle} to={`${to}`}>
            <h1>{children}</h1>
        </Link>
    )
}