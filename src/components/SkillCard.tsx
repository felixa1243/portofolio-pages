import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
export default function SkillCard(props){
  return (
    <Flex 
    justify={'center'}
    direction={'column'}
    align={'center'}
    width={'400px'}
    >
    <Heading size={'lg'}>
      {props.title}
    </Heading>
     {props.icon}
     <Text align={'left'}>
     {props.description}
     </Text>
    </Flex>
    )
}
