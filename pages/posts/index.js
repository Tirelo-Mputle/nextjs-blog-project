import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPost } from '../../lib/posts-util';

const AllPostsPage = ({ allPosts }) => {
  return <AllPosts posts={allPosts} />;
};
export const getStaticProps = () => {
  const allPosts = getAllPost();
  return { props: { allPosts } };
};
export default AllPostsPage;
