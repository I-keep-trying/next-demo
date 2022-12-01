import { Text, Heading, Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function About({ about }) {
  return (
    <>
      <Stack spacing={4}>
      
        <Link href={`/`} passHref={true}>
          Back
        </Link>
        <Heading>Contact Form</Heading>
       
        <Text>
          {`Coming soon. Any day now.`}
        </Text>
      </Stack>
    </>
  )
}
