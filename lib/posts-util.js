//Extra functions for fetching the data and extracting meta data from the markdown files
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
//absolute path to posts folder (contains markdown files)
const postDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier) => {
  //get the file name without the extension
  const postSlug = postIdentifier.replace(/\.md$/, '');
  //get absolute path of the markdown file
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  //  read the file and return its content (as a string)
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  //get the data and content seperately from the fileContent string
  const { data, content } = matter(fileContent);
  //create a post object containing information about the post
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};
export const getPostFiles = () => {
  const postFiles = fs.readdirSync(postDirectory);
  return postFiles;
};
export const getAllPost = () => {
  //The fs.readdirSync() method is used to synchronously
  //read the contents of a given directory. The method returns
  //an array with all the file names or objects in the directory.

  const postFiles = getPostFiles();

  //get postData objects for all the files in postFiles
  const allPosts = postFiles.map((singlePostFile) => {
    return getPostData(singlePostFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPost();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
