import TextInput from "../../UI/TextInput/TextInput.jsx";
import TextArea from "../../UI/TextArea/TextArea.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import PostCard from "../../UI/PostCard/PostCard.jsx";
import {useState} from "react";
import styles from "./CreatePost.module.css"

export default function CreatePost() {
    const [headline, setHeadline] = useState('')
    const [description, setDescription] = useState('')

    function handleHeadlineChange(e) {
        setHeadline(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    return (
        <>
            <h1 className={styles.Headline}>Create Post</h1>
            <form>
                <h2>Enter a headline</h2>
                <TextInput onChange={handleHeadlineChange} maxLength={100}/>
                <h2>Enter a description</h2>
                <TextArea onChange={handleDescriptionChange} maxLength={500}/>
                <SuccessButton>Create</SuccessButton>
            </form>
            <PostCard headline={headline} description={description}/>
        </>
    )
}