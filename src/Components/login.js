import React from 'react'
import {Container} from '../Style Components/login'
import { Head } from '../Style Components/login'
import { Input } from '../Style Components/login'
import { Button } from '../Style Components/login'

export default function Login () {
  return (
      <>     
      <Container>
          <Head>Log in your account</Head>
          <Input type="text" placeholder='Username'/>
          <Input type="text" placeholder='Password'/>
          <Button>Login</Button>
      </Container>
      </>
  )
}
