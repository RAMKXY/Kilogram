import PostCard from "../../UI/PostCard/PostCard.jsx";
import {useEffect, useState} from "react";

export default function Home() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts', {
                method: "GET",
            })
            const responseJSON = await response.json()
            setPostList(responseJSON)
        }
        fetchPosts()
    }, [])

    return (
        <>
            {
                postList.map(post =>
                <PostCard author={post.author} title={post.title} content={post.content}/>
            )}
        </>
    );
}
