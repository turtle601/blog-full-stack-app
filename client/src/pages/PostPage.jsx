import React from 'react';
import styled from 'styled-components';

// Componenet 가져오기
import Header from '../components/common/Header';
import PostViewer from '../components/post/PostViewer';

const PostPage = () => {
  return (
    <>
      <Header />
      <PostViewer />
    </>
  );
};

export default PostPage;
