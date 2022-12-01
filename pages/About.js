import { Text, Heading, Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Stack spacing={4}>
        <Link href={`/`} passHref={true}>
          Back
        </Link>
        <Heading>About Me</Heading>
        <Text>NOVEMBER 5, 2022</Text>
        <Text>
          {`I absolutely love coding. I don't know if I'm any good at it, but 
            I'll use this website to show off some of my MERN stack apps.`}
        </Text>
        <Text>
          {`In the coming days/weeks I will be adding more content and 
            functionality.`}
        </Text>
      </Stack>
    </>
  )
}
