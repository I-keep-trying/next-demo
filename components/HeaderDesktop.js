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
import { GoMarkGithub } from 'react-icons/go'
import logo from '../public/nira.png'
import AuthBtn from './AuthBtn'
import ThemeToggle from './ThemeToggle'

export function HeaderDesktop() {
  const { colorMode, toggleColorMode } = useColorMode()

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
            <Divider orientation="vertical" />
            <Box>
              <Text
                size="xl"
                _hover={{
                  color: 'pink.600',
                }}
                as="a"
                href="https://github.com/I-keep-trying/next-demo"
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

        <ThemeToggle />
      </Stack>
    </>
  )
}
