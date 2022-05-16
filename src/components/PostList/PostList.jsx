import React from 'react';
import './PostList.scss';

const PostList = (props) => {
  const { postList } = props;
  return (
    <ul className="container-postList">
      {postList.map((post, idx) => (
        <li key={`post-${post.id}`}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
