import styles from "./SuccessButton.module.css"

export default function SuccessButton({ children }){
    return(
        <button className={styles.SuccessButton}>{children}</button>
    )
}