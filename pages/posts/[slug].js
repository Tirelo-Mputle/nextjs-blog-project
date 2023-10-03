import React from 'react';
import Head from 'next/head';
import { getPostData, getPostFiles } from '../../lib/posts-util';
import PostContent from '../../components/posts/post-detail/post-content';
const PostDetailsPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </>
  );
};
export const getStaticProps = (context) => {
  //get concrete slug path value
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};
//returns object with all the concrete slug paths that should
//be prepared.
export const getStaticPaths = () => {
  const postFileNames = getPostFiles();
  //remove extension from the file names

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const chosenPaths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths: chosenPaths,
    //Choosing to define all the paths
    fallback: false,
  };
};
export default PostDetailsPage;
