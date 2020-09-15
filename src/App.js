import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'


function App() {
    const [user, setUser] = useState("Mad")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please login"
    }, [user])

    const handleAddPost = useCallback(newPost => {
        setPosts([newPost, ...posts])
    }, [posts])

    if (!user) {
        return <Login setUser={setUser}/>
    }

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <CreatePost user={user} handleAddPost={handleAddPost}/>
            <PostList posts={posts}/>
        </>
    )
}

export default App