import React,{useState,useEffect}from 'react';
import "../css/Feed.css";
import Qbox from "./Qbox";
import Post from "./Post";
import db from '../firebase';
function Feed() {
    const [posts,setPosts] =useState([])
    useEffect(() => {
        db.collection("questions").orderBy("timestamp", "desc").onSnapshot((snapshot) =>setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                questions: doc.data(),
              }))
            )
          );
      }, []);
    
    return (
        <div className="feed">
            <Qbox />
            {
                posts.map(({id,questions})=>(
                    <Post
                    key={id}
                    Id={id}
                    imageUrl={questions.imageUrl} 
                    question={questions.question}
                    timestamp={questions.timestamp}
                    users={questions.user}
                    />
                ))
            }    
        </div>
    )
}

export default Feed
