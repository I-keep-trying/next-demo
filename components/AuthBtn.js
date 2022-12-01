import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
//import { Image } from '@chakra-ui/react'

const AuthBtn = () => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return (
      <div>
        <div>
          {/* <RefreshIcon /> */}
        </div>
      </div>
    )
  }
  if (status === 'unauthenticated') {
    return (
      <div>
        <button onClick={() => signIn()}>Login</button>
      </div>
    )
  }
  return (
    <div>
      <Image
        src={session.user.image}
        alt={session.user.name}
        width={30}
        height={30}
      />
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}

export default AuthBtn
