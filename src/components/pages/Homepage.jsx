import React from 'react';
import  Navbar  from "../Navbar";
import Blogs from "../Blogs"
import Footer from "../Footer";


function Homepage(blogs) {
 
  return (
    <div>
    <Navbar/>
    <Blogs blogs={blogs?blogs:""}/>
    <Footer/>
    </div>
  )
}

export default Homepage
