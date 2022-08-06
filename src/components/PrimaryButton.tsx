import {
  Button
} from '@chakra-ui/react'
export default function PrimaryButton(props) {
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