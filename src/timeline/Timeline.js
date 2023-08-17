import React, { useEffect, useState } from 'react';
import './Timeline.css';
import Post from './posts/Post';
// import Replylist from './posts/reply/Replylist';
// import Write from './Write';
// import { axiosInstance } from '../apis/instance';
import { getPeedsAll } from '../apis/peeds';

function Timeline() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPeedsAll().then((res) => {
      setPosts(res.data);
    });
  }, []);

  const getPostAll = async () => {
    const res = await getPeedsAll();
    console.log(res);
    setPosts(res.data);
  };

  // const addPost = (newPost) => {
  //   setPosts((prevPosts) => [newPost, ...prevPosts]);
  // };
  return (
    <div className="timeline">
      <div className="timeline__post">
        {posts?.map((post) => (
          <Post
            key={post?.id}
            peedId={post?.id}
            user={post?.userName}
            postImage={post?.poseImage}
            likes={post?.heart.liked}
            hates={post?.heart.dislike}
            comments={post?.comments}
            getPostAll={getPostAll}
            // replyNum={Replylist.replyNum}
          />
        ))}
      </div>
      <div className="timeline__write">
        {/* Write 컴포넌트를 여기에 추가하고 addPost 함수를 props로 전달?하라는디 */}
        {/* <Write addPost={addPost} /> */}
      </div>
    </div>
  );
}

export default Timeline;
