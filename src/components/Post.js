import React, { useContext } from 'react'
import { UserContext, PostContext } from '../App';

function Post({ image, content, user, id }) {
    const currentUser = useContext(UserContext)
    const { dispatch } = useContext(PostContext)
    const isCurrentUSer = currentUser === user

    function handleDeletePost() {
        dispatch({
            type: "DELETE_POST",
            payload: { id }
        })
    }

    return (
        <>
            {image && <img
                style={{ height: 100, width: 200, objectFit: 'cover' }}
                src={URL.createObjectURL(image)}
                alt="Post Cover"
            />}

            <p>{content}</p>
            <div style={{ color: isCurrentUSer && '#0a0' }}>{user}</div>
            <div>
                {isCurrentUSer && <button onClick={handleDeletePost}>DELETE</button>}
            </div>
        </>
    )
}

export default Post
