import {
  Button
} from '@chakra-ui/react'
type Props={
  fill:string
}
const PrimaryButton:React.FunctionComponent<Props> =(props)=>{
  return (
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}>
              {props.fill}
            </Button>
            )
}
export default PrimaryButton