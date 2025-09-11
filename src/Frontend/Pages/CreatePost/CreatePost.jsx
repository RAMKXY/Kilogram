import TextInput from "../../UI/TextInput/TextInput.jsx";
import TextArea from "../../UI/TextArea/TextArea.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import PostCard from "../../UI/PostCard/PostCard.jsx";
import {useState} from "react";
import styles from "./CreatePost.module.css"

export default function CreatePost() {
    const [author, setAuthor] = useState('')
    const [headline, setHeadline] = useState('')
    const [description, setDescription] = useState('')

    const [resultMessage, setResultMessage] = useState('')
    const [isShowResultMessage, setIsShowResultMessage] = useState(false)

    function handleAuthorChange(e){
        setAuthor(e.target.value)
    }

    function handleHeadlineChange(e) {
        setHeadline(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    async function handlePostRequest(e){
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/addPost', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                author: author,
                headline: headline,
                description: description
            })
        })

        const responseJSON = await response.json()

        setResultMessage(responseJSON.message)
        setIsShowResultMessage(true)

    }

    return (
        <>
            <h1 className={styles.Headline}>Create Post</h1>
            <form onSubmit={handlePostRequest}>
                <h2>Enter a author</h2>
                <TextInput onChange={handleAuthorChange} maxLength={50}/>
                <h2>Enter a headline</h2>
                <TextInput onChange={handleHeadlineChange} maxLength={100}/>
                <h2>Enter a description</h2>
                <TextArea onChange={handleDescriptionChange} maxLength={500}/>
                <SuccessButton type="submit">Create</SuccessButton>
            </form>
            <PostCard author={author} headline={headline} description={description}/>
            {isShowResultMessage && <h1 className={styles.resultMessage}>{resultMessage}</h1>}
        </>
    )
}