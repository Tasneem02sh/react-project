import React from "react";
import { Homepage, BlogContentpage } from "./components/pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  let { loading, data, error } = useFetch('http://localhost:1337/api/Blogs?populate=*');
  if (loading) return <p>Loading---</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data ? data.data : []} />}></Route>
        <Route path='/blog/:id' element={<BlogContentpage blogs={data ? data.data : []} />}></Route>
      </Routes>
    </div>
  );
}
