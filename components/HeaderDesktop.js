import React, { useContext } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Text,
  Icon,
  Divider,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Image from 'next/image'
//import { authContext } from '../context/auth-context'
import { GoMarkGithub } from 'react-icons/go'
import logo from '../public/nira.png'
import AuthBtn from './AuthBtn'
import ThemeToggle from './ThemeToggle'
import { useSession, signIn, signOut } from 'next-auth/react'

const AvMenu = ({ isOpen, onClose }) => {
  //  const ctx = useContext(authContext)
  /*   const navigate = useNavigate()

  const user = () => navigate('/user')
  const changepw = () => navigate('/changepw') */
  const { data: session, status } = useSession()
  return (
    <>
      <MenuButton
        isActive={isOpen}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
      >
        <Avatar
          name=""
          size="sm"
          src={
            'https://res.cloudinary.com/dra1jwwjt/image/upload/v1668015342/avatar1_panwhi.svg'
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={user}>Settings</MenuItem>
        <MenuItem onClick={changepw}>Security</MenuItem>
      </MenuList>
    </>
  )
}

export function HeaderDesktop() {
  //const ctx = useContext(authContext)
  const { colorMode, toggleColorMode } = useColorMode()

  const handleLogout = () => {
    //ctx.handleLogout()
    //  navigate('/')
  }

  const { data: session, status } = useSession()
  /* 
    ///console.log('Header session',session)
  {
    "user": {
        "name": "Dre Crego",
        "email": "drecrego@gmail.com",
        "image": "https://lh3.googleusercontent.com/a/ALm5wu2QqOdUCaDDCN-SdnPT4aPCvOH8QZQ0nvAsZ5XW=s96-c",
        "id": "6373de19f792a083e020c28f"
    },
    "expires": "2022-12-31T17:25:51.614Z"
}
  */
  return (
    <>
      <Flex flex={{ base: 1 }}>
        <Box p={0} w="4%">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </Box>
        <Flex ml={10}>
          {/* Left menu wrap */}
          <Stack mt="9px" direction={'row'} spacing={4}>
            {/* Left menu items */}
            {/* <Box
              _hover={{
                color: 'pink.600',
              }}
            >
              <Link href="/">Home</Link>
            </Box>
            <Box
              _hover={{
                color: 'pink.600',
              }}
            >
              <Link href="/Contact">Contact Me</Link>
            </Box>
            <Box
              _hover={{
                color: 'pink.600',
              }}
            >
              <Link href="/About">About</Link>
            </Box> */}
            <Divider orientation="vertical" />
            <Box>
              <Text
                size="xl"
                _hover={{
                  color: 'pink.600',
                }}
                as="a"
                href="https://github.com/I-keep-trying/passport-email-signup"
                color={useColorModeValue('gray.600', 'gray.200')}
              >
                <Icon boxSize={6} as={GoMarkGithub} />
              </Text>
            </Box>
            <Box>
              <Link href="/About"> About</Link>
            </Box>
          </Stack>
        </Flex>
      </Flex>

      {/* Right aligned menu */}
      <Stack justify={'flex-end'} direction={'row'} spacing={6}>
        <AuthBtn />

        {/* <Button
          fontSize={'sm'}
          fontWeight={400}
          variant={'link'}
          _hover={{
            color: 'pink.600',
          }}
          //   onClick={login}
        >
          Sign In
        </Button> */}
        {/*   {!ctx.isLoggedIn ? (
          <>
            <Button
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              _hover={{
                color: 'pink.600',
              }}
              onClick={login}
            >
              Sign In
            </Button>
            <Button
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.600'}
              _hover={{
                bg: 'pink.700',
              }}
              onClick={register}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Button
              variant={'link'}
              fontSize={'sm'}
              fontWeight={400}
              onClick={handleLogout}
              _hover={{
                color: 'pink.600',
              }}
            >
              Log out
            </Button>
            <Menu>
              <AvMenu />
            </Menu>
          </>
        )} */}
        <ThemeToggle />
      </Stack>
    </>
  )
}
