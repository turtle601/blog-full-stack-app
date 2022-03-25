import React from 'react';

// Componenet 가져오기
import Header from '../components/common/Header';
import PostViewer from '../components/postItem/PostViewer';

const PostPage = () => {
  return (
    <>
      <Header />
      <PostViewer />
    </>
  );
};

export default PostPage;
