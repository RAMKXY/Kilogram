import PostCard from "../../UI/PostCard/PostCard.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('api/posts')
            setPostList(await response.json())
        }
        fetchData()
    }, [])

    return (
        <>
            {postList.map(post =>
                <PostCard headline={post.title} author={post.author}  description={post.content}/>
            )}
        </>
    );
}
