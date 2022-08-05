import {useState,useEffect} from 'react';
import axios from 'axios';
const useFetch=url=>{
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(()=>{
   setLoading(true);
   (async ()=>{
     try{
       const response=await axios.get(url);
       setData(response.data);
     } catch(err){
       setError(err);
     } finally{
       setLoading(false);
     }
   })()
  },[url])
  return {
    data,loading,error
  }
}
export default useFetch