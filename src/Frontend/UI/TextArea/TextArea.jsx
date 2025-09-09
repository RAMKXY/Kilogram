import styles from "./TextArea.module.css"

export default function TextArea({ onChange, maxLength }){
    return(
        <>
            <textarea
                onChange={onChange}
                className={styles.TextArea}
                placeholder={"Enter text"}
                maxLength={maxLength}
            />
            <br/>
        </>
    )
}