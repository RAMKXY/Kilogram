import styles from "./PostCard.module.css"

export default function PostCard({author, headline, description}){
    return(
        <div className={styles.PostCard}>
            <p className={styles.author}>{author || "Author"}</p>
            <h1 className={styles.headline}>{headline || 'HeadLine'}</h1>
            <p className={styles.description}>{description || 'Description'}</p>
        </div>
    )
}