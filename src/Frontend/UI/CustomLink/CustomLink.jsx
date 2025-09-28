import {Link} from "react-router-dom";
import styles from "./CustomLink.module.css"

export default function CustomLink({ children, to, marginBottom }){
    return(
        <Link
            style={{'--CustomLink-margin-bottom': marginBottom}}
            className={styles.CustomLink}
            to={to}>
            {children}
        </Link>
    )
}