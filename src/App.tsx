import {useEffect,useState} from 'react'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import { 
  Icon,
  Heading,
  Center,
  Text,
  Spinner,
  Container,
  Flex
} from '@chakra-ui/react'
import SkillCard from './components/SkillCard'
import GridSection from './components/GridSection'
import Footer from './components/Footer'
import ProfileSection from './components/ProfileSection'
import {
  AiFillHtml5
} from 'react-icons/ai'
import {
  IconType
} from 'react-icons'
/**
this is  a mock data testing
**/
type mySkill ={
  title:string;
  icon:IconType
  description:string;
}
const skillList:mySkill[]=[{
  title:'Html',
  icon:AiFillHtml5,
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias numquam veniam quas et minus laboriosam ipsum officia. Quibusdam cumque, a quos? Explicabo temporibus assumenda eos repudiandae. Provident, obcaecati, id.'},
  {
  title:'Html',
  icon:AiFillHtml5,
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias numquam veniam quas et minus laboriosam ipsum officia. Quibusdam cumque, a quos? Explicabo temporibus assumenda eos repudiandae. Provident, obcaecati, id.'},
  {
  title:'Html',
  icon:AiFillHtml5,
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias numquam veniam quas et minus laboriosam ipsum officia. Quibusdam cumque, a quos? Explicabo temporibus assumenda eos repudiandae. Provident, obcaecati, id.'}
  ]
export default function App() {
  const [loading,setLoading]=useState(true)
  const [title,setTitle]=useState('home')
  useEffect(()=>{
  document.title='Iqbal net'+'-'+title
  },[document.title])
  useEffect(()=>{
  setLoading(false)
  },[loading])
  if(loading) return (<Container
  minH={'100vh'}
  color={'blue.400'}
  mt={4}
  centerContent
  >
    <Spinner/>
    <Text>
      Please wait...
    </Text>
  </Container>)

  return (
  <Flex 
  direction={'column'}
  minH={'100vh'}>
   <Navbar/>
     <Hero2/>
     <ProfileSection href={'/avatar.png'}/>
       <Center width={'100%'}>
                  <Heading> My skill </Heading>
       </Center>
        <GridSection>
       
       { skillList.map(skill=>{
      return <SkillCard 
              title={skill.title}
              icon={
                  <Icon 
                  as={skill.icon}
                  boxSize={'60px'}
                  color={'orange.400'}
                  />
                  }
              description={skill.description.slice(0,25)+'...'}
                  />
       })
       }
        </GridSection>
        <Footer/>
  </Flex>
  )
}
