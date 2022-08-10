import {
 Box,
 BoxProps
} from '@chakra-ui/react'

interface Props extends BoxProps{
 children:React.ReactNode

}
const Card:React.FunctionComponent<Props>=({children,...props})=>(
<Box border={'1px solid #dedede'} borderRadius={'0.7em'}{...props}>
  {children}
</Box>)
export default Card
