import React from 'react';
import Navbar from "../Navbar";
import BlogContent from "../BlogContent";
import Footer from "../Footer";

function BlogContentPage({blogs}) {

  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs}/>
      <Footer />
    </div>
  );
}

export default BlogContentPage;

