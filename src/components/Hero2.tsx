import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  HStack,
  Spacer
} from '@chakra-ui/react';
import ExternalLink from './ExternalLink'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import {
AiOutlineGithub,
AiFillLinkedin,
AiFillMail
} from 'react-icons/ai'

import {
  ArrowDownIcon
} from '@chakra-ui/icons'
export default function Hero2() {
  return (
    <Container
    maxW={'7xl'}
    position={'relative'}
    overflow={'hidden'}
    >
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: -1,
                left: 0,
                bg: 'blue.200',
                zIndex: -1,
                skewX:'15deg'
              }}>
              Hello i'm
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
             Rajiph iqbal ghandi
            </Text>
          </Heading>
          <Text color={'gray.500'}>
           I'm a fullstack web developer, work with react and express..
          </Text>
          <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}
          justify={'flex-start'}
          align={{base:'flex-start' ,sm:'center'}}
          >
          
               <ExternalLink
           icon={<PrimaryButton fill={'Hire me!'} />}
           href={'https://wa.me/6285927778963'}
           />
           <ExternalLink
           icon={<SecondaryButton 
           icon={<ArrowDownIcon
              h={4} w={4} color={'blue.300'} />} 
           fill={'Download cv'} />}
           href={'/cv.pdf'}

           />
          </Stack>
            <HStack>
            <ExternalLink 
          icon={<AiOutlineGithub size={'18px'}/>}
          href={'https://github.com/felixa1243'}/>
            <ExternalLink 
          icon={<AiFillLinkedin size={'18px'}/>}
          href={'https://github.com/felixa1243'}
          />
          </HStack>
          <Image
          alt={'blob'}
          position={'absolute'}
          align={'center'}
          w={['150px','220px']}
          src={'/blob-left-bottom.png'}
          right={'-3.5rem'}
          top={['-3rem','-15%']}
          
          />
          <Image
          alt={'blob-2'}
          align={'center'}
          w={['150px','220px']}
          src={'/blob-right-top.png'}
          position={'absolute'}
          left={['-5rem','-9rem']}
          bottom={['44%','9%']}
          zIndex={-1}
          />
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('blue.50', 'blue.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
           
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/avatar.png'}
            />
          </Box>
        </Flex>
       
      </Stack>
     
    </Container>
  );
}


export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
