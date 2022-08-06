import { chakra , Container} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
  
export default function Animated() {
  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{
          scale:[5,4],
          x:[100,0]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration:0.5,
          ease: "easeInOut",
        }}
        padding="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        I'm Dizzy!
      </ChakraBox>
    </Container>
  )
}
