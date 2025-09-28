import styles from "./SuccessButton.module.css"

export default function SuccessButton({ children, marginTop, marginBottom}){
    return(
        <button
            style={{
                '--SuccessButton-margin-top': marginTop,
                '--SuccessButton-margin-bottom': marginBottom
            }}
            className={styles.SuccessButton}>{children}
        </button>
    )
}