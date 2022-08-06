import {
  Button
} from '@chakra-ui/react'

import {
  ArrowDownIcon
} from '@chakra-ui/icons'
export default function SecondaryButton(props){
  return (
            <Button
              rounded={'full'}
              size={'lg'}
              color={'blue.400'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.50'}
             leftIcon={<ArrowDownIcon
              h={4} w={4} color={'blue.300'} />}>
              {props.fill}
            </Button>
            )
}