import {useEffect,useState} from 'react'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import { Icon } from '@chakra-ui/react'
import SkillCard from './components/SkillCard'
import {
  useColorMode
}
from '@chakra-ui/react'
import {
  AiFillHtml5
} from 'react-icons/ai'

export default function App() {
  const {colorMode,toggleColorMode}=useColorMode()
  const [title,setTitle]=useState('home')
  useEffect(()=>{
  document.title='Iqbal net'+'-'+title
  },[document.title])
	return (
		<>
                <Navbar/>
                <Hero2/>
                <p onClick={toggleColorMode}>
                 {colorMode==='light'?'dark':'light'} 
                </p>
		</>
  )
}
