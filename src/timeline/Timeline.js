import React, { useEffect, useState } from 'react';
import './Timeline.css';
import Post from './posts/Post';

import { getPeedsAll } from '../apis/peeds';


function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPeedsAll().then((res) => {
      console.log("Server Response:", res.data); // API 응답 확인
      setPosts(res.data);
    });
  }, []);

  const getPostAll = async () => {
    const res = await getPeedsAll();
    console.log(res);
    setPosts(res.data);
  };

  return (
    <div className="timeline">
      <div className="timeline__post">
        {posts?.map((post) => (
          <Post
            key={post?.id}
            peedId={post?.id}
            user={post?.userName}
            postImage={post?.postImage}//post?.image.fileName 으로 차후 교체
            likes={post?.heart.liked}
            postText={post?.postText}
            hates={post?.heart.dislike}
            comments={post?.comments}
            getPostAll={getPostAll}
          />
        ))}
      </div>
      <div className="timeline__write">

      </div>
    </div>
  );
}

export default Timeline;
