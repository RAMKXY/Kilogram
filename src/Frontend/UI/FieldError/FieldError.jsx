import styles from './FieldError.module.css'

export default function FieldError({ children }) {
    return (
        <p className={styles.Error}>{children}</p>
    )
}