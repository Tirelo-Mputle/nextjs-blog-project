import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPost } from '../../lib/posts-util';
import Head from 'next/head';
const AllPostsPage = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials."
        />
      </Head>
      <AllPosts posts={allPosts} />;
    </>
  );
};
export const getStaticProps = () => {
  const allPosts = getAllPost();
  return { props: { allPosts: allPosts } };
};
export default AllPostsPage;
