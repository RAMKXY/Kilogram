import {Link} from "react-router-dom";
import styles from "./NavigationLink.module.css"

export default function NavigationLink({ children, to }){
    return(
        <Link className={styles.HeaderLink} to={`${to}`}>
            {children}
        </Link>
    )
}