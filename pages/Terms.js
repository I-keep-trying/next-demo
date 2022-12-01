import { Text, Heading, Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Stack spacing={4}>
        <Link href={`/`} passHref={true}>
          Back
        </Link>        
        <Text>DECEMBER 1, 2022</Text>

        <Heading>Privacy</Heading>
        <Text>
          {`Currently, this website is not using cookies. Some cookies may be 
          in use by 3rd party resources.`}
        </Text>
        <Heading>Terms of Service</Heading>
        <Text>
          {`Future code changes may cause this disclosure to change.`}
        </Text>
      </Stack>
    </>
  )
}
