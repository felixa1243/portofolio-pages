import {useEffect,useState} from 'react'
import useFetch from './utils/useFetch';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Animated from './components/Animated'
export default function App() {
  const [title,setTitle]=useState('home')
  useEffect(()=>{
    document.title='Iqbal net'+'-'+title
  },[document.title])
	return (
		<>
                <Navbar/>
                <Hero/>
		</>
  )
}
