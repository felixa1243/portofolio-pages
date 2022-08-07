import {
  Flex,
  Text
} from '@chakra-ui/react'

type Props={
  title:string;
  icon:React.ReactChild;
  description:string;
}
export default function SkillCard(props:Props){
  return (
     <Flex 
     direction={'column'} 
     align={'center'}
     justify={'center'}
     width={['150px','250px']}
     >
      <Text fontWeight={700}>
      {props.title}
      </Text>
      
      {props.icon}
      
      <Text fontWeight={400}>
      {props.description}
      </Text>
     </Flex>
    )
}