import PostCard from "../../UI/PostCard/PostCard.jsx";
import {useEffect, useState} from "react";

export default function Home() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('api/posts')
            setPostList( await response.json() )
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
