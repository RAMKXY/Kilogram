import styles from "./PostCard.module.css"

export default function PostCard({author, title, content}){
    return(
        <div className={styles.PostCard}>
            <p className={styles.author}>{author || "Author"}</p>
            <h1 className={styles.title}>{title || 'Title'}</h1>
            <p className={styles.content}>{content || 'Content'}</p>
        </div>
    )
}