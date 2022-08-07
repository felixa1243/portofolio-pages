import {useEffect,useState} from 'react'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import { 
  Icon,
  Heading,
  Center
} from '@chakra-ui/react'
import SkillCard from './components/SkillCard'
import GridSection from './components/GridSection'
import {
  AiFillHtml5
} from 'react-icons/ai'
import InternalLink from './components/InternalLink'
export default function App() {
  const [title,setTitle]=useState('home')
  useEffect(()=>{
  document.title='Iqbal net'+'-'+title
  },[document.title])
	return (
		<>
                <Navbar/>
                  <Hero2/>
                <Center width={'100%'}>
                  <Heading> My skill </Heading>
                </Center>
                <GridSection>
                  <SkillCard 
                  title={'Html5'}
                  icon={
                  <Icon 
                  as={AiFillHtml5}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />}
                  description={'Test'}
                  />
                  <SkillCard 
                  title={'Html5'}
                  icon={
                  <Icon 
                  as={AiFillHtml5}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />}
                  description={'Test'}
                  />
                  <SkillCard 
                  title={'Html5'}
                  icon={
                  <Icon 
                  as={AiFillHtml5}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />}
                  description={'Test'}
                  />
                  <SkillCard 
                  title={'Html5'}
                  icon={
                  <Icon 
                  as={AiFillHtml5}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />}
                  description={'Test'}
                  />
                  <SkillCard 
                  title={'Html5'}
                  icon={
                  <Icon 
                  as={AiFillHtml5}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />}
                  description={'Test'}
                  />
                </GridSection>
                
             
		</>
  )
}
