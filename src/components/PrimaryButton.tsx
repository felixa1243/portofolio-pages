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
              boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
              _hover={{ bg: 'blue.500' }}>
              {props.fill}
            </Button>
            )
}
export default PrimaryButton
