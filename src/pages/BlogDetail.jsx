import React, { useContext } from 'react';
import { GerichtContext } from './../components/Context';
import Hero from './../components/Page_Contacts/Hero/Hero';
import Blog from './../components/Page_BlogDetails/Blog/Blog';
import Comments from './../components/Page_BlogDetails/Comments/Comments';
import NewPost from './../components/Page_BlogDetails/NewPost/NewPost';

export default function BlogDetail () {
  const { openBlogDetail } = useContext(GerichtContext);
  return (
    <article>
      <Hero title="Our Blogs" page="Our Blogs- grid" page2="Cooking Tips" page3={openBlogDetail?.title} />
      <Blog />
      <Comments />
      <NewPost />
    </article>
  );
}
