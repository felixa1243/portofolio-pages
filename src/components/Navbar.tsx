import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Center,
} from '@chakra-ui/react';
import ExternalLink from './ExternalLink'
import { AddIcon,MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={
      useColorModeValue('white.100', 'gray.900')}
      px={4} 
      position={'sticky'}
      top={0}
      backdropFilter="auto"
      backdropBlur={'8px'}
      zIndex={5}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
<ExternalLink
      href={'http://localhost:5173'}
      icon={
        <Heading 
          size={'sm'}
          position={'relative'}
          >
          Iqbal Network &nbsp; 
          <AddIcon 
          boxSize={'7px'}
          position={'absolute'}
          />
          </Heading>
}      
          isExternal={false}
/>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu isLazy>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'/avatar.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'/avatar.png'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Rajiph iqbal</p>
                  </Center>
                  

                  <br />
                  <MenuDivider />
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My skill</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem onClick={toggleColorMode
                  }>Theme {colorMode==='light'?'Dark':'Light'}</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
