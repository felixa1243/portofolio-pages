import {useEffect,useState} from 'react'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import { 
  Icon,
  Heading,
  Center,
  Flex,
  Text
} from '@chakra-ui/react'
import SkillCard from './components/SkillCard'
import GridSection from './components/GridSection'
import Footer from './components/Footer'
import {
  AiFillHtml5
} from 'react-icons/ai'
export default function App() {
  const [title,setTitle]=useState('home')
  useEffect(()=>{
  document.title='Iqbal net'+'-'+title
  },[document.title])
	return (
		<Flex 
                minH={'100vh'}
                grow={1}
                direction={'column'}
                >
                <Navbar/>
                  <Hero2/>
                  <Center width={'100%'}>
                  <Heading>
                    Profile
                  </Heading>
                  </Center>
                  <GridSection>
                    <Text>
                    Name: Rajiph iqbal ghandi
                    </Text>
                  </GridSection>
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
                <Footer/>
		</Flex>
  )
}
