import styles from './FieldLabel.module.css'

export default function FieldLabel({ children }){
    return (
        <h2 className={styles.FieldLabel}>{children}</h2>
    )
}