import TextInput from "../../UI/TextInput/TextInput.jsx";
import TextArea from "../../UI/TextArea/TextArea.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import PostCard from "../../UI/PostCard/PostCard.jsx";
import {useState} from "react";
import styles from "./CreatePost.module.css"

export default function CreatePost() {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [resultMessage, setResultMessage] = useState('')
    const [isShowResultMessage, setIsShowResultMessage] = useState(false)

    function handleAuthorChange(e){
        setAuthor(e.target.value)
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleContentChange(e){
        setContent(e.target.value)
    }

    async function handlePostRequest(e){
        e.preventDefault()

        const response = await fetch('/api/create-post', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                author: author,
                title: title,
                content: content
            })
        })

        const responseJSON = await response.json()

        setResultMessage(responseJSON.body)
        setIsShowResultMessage(true)

    }

    return (
        <>
            <h1 className={styles.title}>Create Post</h1>
            <form onSubmit={handlePostRequest}>
                <h2>Enter a author</h2>
                <TextInput onChange={handleAuthorChange} maxLength={30}/>

                <h2>Enter a title</h2>
                <TextInput onChange={handleTitleChange} maxLength={150}/>

                <h2>Enter a content</h2>
                <TextArea onChange={handleContentChange} maxLength={1000}/>

                <SuccessButton marginTop={"20px"} type="submit">Create</SuccessButton>
            </form>
            <PostCard author={author} title={title} content={content}/>

            {isShowResultMessage && <h1 className={styles.resultMessage}>{resultMessage}</h1>}
        </>
    )
}