import React, { useEffect } from 'react';

const Posts = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
