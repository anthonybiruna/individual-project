import React, { useEffect, useState } from 'react'
import axiosInstance from '../lib/api'
import Post from './Post'

function Posts() {

    const [feedPost, setFeedPost] = useState([])

    const fetchFeedPost = async () => {
        try {
            const res = await axiosInstance.get("/posts")

            setFeedPost(res.data.result.rows)
        } catch (err) {
            console.log(err.message);
        }
    }

    const renderFeedPost = () => {
        return feedPost.map((val) => {
            return (
                <Post
                id={val.id}
                username={val.username}
                imageUrl={val.image_url}
                caption={val.caption}
                key={val?.id?.toString()}
                />
            )
        })
    }

    useEffect(() => {
        fetchFeedPost()
    }, [])

  return (
    <div>
        {renderFeedPost()}
    </div>
    
  )
}

export default Posts