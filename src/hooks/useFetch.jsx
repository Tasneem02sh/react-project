import {useEffect,useState} from 'react'

function useFetch(url) {
const [data,setData]=useState(null)
const [error,setError]=useState(null)
const [loading,setLoading]=useState(true)
useEffect(() =>{
    const fetchData =async () =>{
     setLoading(true)   
     try{
        const res=await fetch(url)
        const json=await res.json()
        setData(json)
        setLoading(false)
     } catch(error){
        setError(error)
        setLoading(false)
     }
 }
 fetchData()
},[url])

  return {loading,error,data}

// const [records,setRecords]=useState([])
// useEffect(() =>{
// fetch('http://localhost:1337/api/Blogs')
// .then(response => response.json())
// .then(data=>setRecords(data))
// .catch(err=>console.log(err))

// },[])

// return (
// <div>
// <ul>

// {records.map((list,index)=>(
// <li key={index} >{list.id} | {list.name}</li>
// ))}
// </ul>
// </div>
// )

}

export default useFetch
