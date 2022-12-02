import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { ImSpinner9 } from 'react-icons/im'

const AuthBtn = () => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return (
      <div>
        <div>
          <ImSpinner9 />
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
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default AuthBtn

  /* 
    ///console.log('session data',status)
      'authenticated' / 'unauthenticated'
    ///console.log('session',session)
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