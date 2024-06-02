import React from 'react';
import { useParams } from 'react-router-dom';
import Blogs from './Blogs';

function BlogContent({ blogs }) {
  console.log(blogs);
  const { id } = useParams()


  let blog = {}
  if (blog) {
       let arr = blogs.filter(blog => blog.id == id)
       blog = arr[0]

  } else {
       blog = {}
  }
  console.log("Blog object")
  console.log(blog)

  // const blogs = [
  //   {
  //     'id': 1,
  //     'title': 'Myself',
  //     'desc': 'My name is Tasneem Alshiyyab. I am 22 years old.I am from Jordan . I am student at Al balqa applied university/ faculty of Prince Abdullah bin Ghazi College of Information Technology/ department of Software Engineering.I am a programmer',
  //     'img': 'https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-Portfolio-Word-With-Pencil-Ins-311773459.jpg',
  //     'name': 'Tasneem Alshiyyab',
  //     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
  //     'description': 'Front-End Developer'

  //   },
  //   {
  //     "id": 2,
  //     'title': 'Myself',
  //     'desc': 'My name is Tasneem Alshiyyab. I am 22 years old.I am from Jordan . I am student at Al balqa applied university/ faculty of Prince Abdullah bin Ghazi College of Information Technology/ department of Software Engineering.I am a programmer',
  //     'img': 'https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-Portfolio-Word-With-Pencil-Ins-311773459.jpg',
  //     'name': 'Tasneem Alshiyyab',
  //     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
  //     'description': 'Front-End Developer'

  //   },
  //   {
  //     "id": 3,
  //     'title': 'Myself',
  //     'desc': 'My name is Tasneem Alshiyyab. I am 22 years old.I am from Jordan . I am student at Al balqa applied university/ faculty of Prince Abdullah bin Ghazi College of Information Technology/ department of Software Engineering.I am a programmer',
  //     'img': 'https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-Portfolio-Word-With-Pencil-Ins-311773459.jpg',
  //     'name': 'Tasneem Alshiyyab',
  //     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
  //     'description': 'Front-End Developer'

  //   },


  // ]


  return (
    <div className='container'>
      <div className='row justify-content-center py-5'>
        <div className='col-12 col-md-6 col-lg-4'>
          <img className='img-fluid mb-3' src={`http://localhost:1337${blog.attributes.blogImg.data.attributes.url}`} alt={blog.title} />
          <h1 className='fw-bold'>{blog.attributes.title}</h1>
          <p>{blog.attributes.description}</p>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card shadow-lg bg-white pt-3 rounded-3'>
            <img className='rounded-circle img-thumbnail mx-auto d-block' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} alt='' />
            <div className='text-center p-4'>
              <h1 className='fw-bold'>{blog.attributes.authorName}</h1>
              <p className='text-muted'>{blog.attributes.authorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;


