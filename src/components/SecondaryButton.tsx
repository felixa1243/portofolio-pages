import {
  Button
} from '@chakra-ui/react'

type Props={
  title:string,
  icon?:React.ReactChild
}
export default function SecondaryButton(props:Props){
  return (
            <Button
              rounded={'full'}
              size={'lg'}
              color={'blue.400'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.50'}
             leftIcon={props.icon&&props.icon}>
              {props.fill}
            </Button>
            )
}