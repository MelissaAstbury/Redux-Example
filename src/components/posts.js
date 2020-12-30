import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  //   const singlePost = posts.forEach((post) => {
  //     console.log(post.title);
  //   });

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setPosts]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default Posts;
