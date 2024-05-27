import React from 'react';
import { Link } from 'react-router-dom';

function Blogs({ blogs }) {
    console.log("BlogsPage");
    console.log(blogs);

    const blogs1 = [
        {
            id: 1,
            title: 'Blog 1',
            desc: 'The afternoon sun sets over downtown Dallas, reflecting light off steel and glass onto Thanks-Giving Square.',
            img: 'https://cdn.dribbble.com/users/5748990/screenshots/19824229/media/2158915b1e431083bddc54e5e2e976a3.png?resize=400x0',
            name: 'Tasneem Alshiyyab',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
            description: 'Front-End Developer'
        },
        {
            id: 2,
            title: 'Blog 2',
            desc: 'The afternoon sun sets over downtown Dallas, reflecting light off steel and glass onto Thanks-Giving Square.',
            img: 'https://cdn.dribbble.com/users/5748990/screenshots/19824229/media/2158915b1e431083bddc54e5e2e976a3.png?resize=400x0',
            name: 'Tasneem Alshiyyab',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
            description: 'Front-End Developer'
        },
        {
            id: 3,
            title: 'Blog 3',
            desc: 'The afternoon sun sets over downtown Dallas, reflecting light off steel and glass onto Thanks-Giving Square.',
            img: 'https://cdn.dribbble.com/users/5748990/screenshots/19824229/media/2158915b1e431083bddc54e5e2e976a3.png?resize=400x0',
            name: 'Tasneem Alshiyyab',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s',
            description: 'Front-End Developer'
        },
    ];

    return (
        <div className='w-100% bg-light'>
            <div className='container mw-1240px mx-auto'>
                <div className='row justify-content-md-center row-cols-4 gap-8 text-black p-5'>
                    {blogs1.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <div className="overflow-hidden shadow-lg bg-white pt-3 rounded-3">
                                <img className='rounded mx-auto' src={blog.img} alt={blog.title} />
                                <div className='p-8'>
                                    <h1 className='fw-bold'>{blog.title}</h1>
                                    <p className='text-muted'>{blog.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}//`http://localhost:1337${blog.attributes.img.data.attributes.url}`

export default Blogs;
