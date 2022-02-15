import React from 'react'
import {Container} from '../Style Components/login'
import { Head } from '../Style Components/login'
import { Input } from '../Style Components/login'
import { Button } from '../Style Components/login'
import { MainContatiner } from '../Style Components/login'
export default function Login () {
  return (
      <>     
    <MainContatiner>
      <Container>
          <Head>Log in your account</Head>
          <Input type="text" placeholder='Username' required/>
          <Input type="password" placeholder='Password' required/>
          <Button>Login</Button>
      </Container>
      </MainContatiner>
      </>
  )
}
