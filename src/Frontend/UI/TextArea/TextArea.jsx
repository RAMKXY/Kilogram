import styles from "./TextArea.module.css"

export default function TextArea({ onChange, maxLength, placeholder = "Enter text" }){
    return(
        <>
            <textarea
                onChange={onChange}
                className={styles.TextArea}
                placeholder={placeholder}
                maxLength={maxLength}
            />
            <br/>
        </>
    )
}