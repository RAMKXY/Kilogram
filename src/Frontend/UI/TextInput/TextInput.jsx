import styles from "./TextInput.module.css"

export default function TextInput({ size = 'large', onChange, maxLength, placeholder = 'Enter text'}){
    return (
        <input
            onChange={onChange}
            className={`${styles[size]} ${styles.TextInput}`}
            placeholder={placeholder}
            maxLength={maxLength}
            type="text"
        />
    )
}