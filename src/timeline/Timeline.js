import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstions';
import Post from './posts/Post';


function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "yalruu",
      poseImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 12,
      timestamp: "2d"
    },
    {
      user: "hello_",
      poseImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 55,
      timestamp: "2d"
    },
    {
      user: "itsme",
      poseImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 29,
      timestamp: "2d"
    },
    
  ]);


  return <div className="timeline">
    <div className="timeline__left">
      <div className="timeline__posts">
        {posts.map((post) => (
          <Post 
            user={post.user} 
            postImage={post.poseImage} 
            like={post.likes} 
            timestamp={post.timestamp} 
          />
        ))}
      </div>
    </div>
    <div className="timeline__right">
      <Sugesstions />
    </div>
  </div>
  
}

export default Timeline;