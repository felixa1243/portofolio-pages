import {
  Button
} from '@chakra-ui/react'
interface Props{
  fill:string;
  icon:React.ReactElement;
}
const SecondaryButton:React.FunctionComponent<Props>=(props)=>{
  return (
            <Button
             rounded={'full'}
             size={'lg'}
             color={'blue.400'}
             fontWeight={'normal'}
             px={6}
             colorScheme={'blue'}
             bg={'blue.50'}
             leftIcon={props.icon}
             >
             {props.fill}
            </Button>
            )
}
export default SecondaryButton