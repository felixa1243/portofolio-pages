import {
 Box,
 HStack,
 Image,
 Text,
 Heading,
 Center,
 VStack,
 SimpleGrid,
 GridItem
} from '@chakra-ui/react'

interface Props{
  href:string
}

const ProfileSection:React.FunctionComponent<Props> = ({href})=>{
   return (
    <Box 
    px={3}
    w={'full'}
    >
      <Heading>
       My profile
      </Heading>
      <SimpleGrid 
      columns={[1,2]}>
       <GridItem>
         <Image 
         src={href}
         boxSize={'400px'}
         />
      </GridItem>
       <GridItem
       py={5}
       >
         <Center 
         py={3}
         >
           <VStack>
            <HStack>
              <Text>Name</Text>
              <Text>Rajiph</Text>
            </HStack>
           </VStack>
         </Center>
       </GridItem>
      </SimpleGrid>
    </Box>
   )
}
export default ProfileSection
