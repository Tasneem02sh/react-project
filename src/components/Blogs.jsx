import React from 'react';
import { Link } from 'react-router-dom';

function Blogs({ blogs }) {   
    return (
        <div className='w-100% bg-light'>
            <div className='container mw-1240px mx-auto'>
                <div className='row justify-content-md-center row-cols-4 gap-8 text-black p-5'>
                    {blogs.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <div className="overflow-hidden shadow-lg bg-white pt-3 rounded-3">
                                <img className='rounded mx-auto' src={`http://localhost:1337${blog.attributes.img.data.attributes.url}`} alt="" />
                                <div className='p-8'>
                                    <h1 className='fw-bold'>{blog.attributes.blogTitle}</h1>
                                    <p className='text-muted'>{blog.attributes.blogDesc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
