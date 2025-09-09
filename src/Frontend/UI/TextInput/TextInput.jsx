import styles from "./TextInput.module.css"

export default function TextInput({ size = 'large', onChange, maxLength}){
    return (
        <input
            onChange={onChange}
            className={`${styles[size]} ${styles.TextInput}`}
            placeholder={"Enter text"}
            maxLength={maxLength}
            type="text"
        />
    )
}