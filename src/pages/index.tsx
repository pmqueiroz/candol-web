import Head from 'next/head'
import { Container, Form, Logo } from '../styles/pages/home';
import logoImg from '../assets/logo.svg';
import Input from '../Components/Input';

import { FiUser, FiLock } from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Candol</title>
      </Head>

      <Container>
         <Logo>
            <img src={logoImg} alt="Candol"/>
            <h2>Candol</h2>
         </Logo>
         <Form>
            <h2>Login</h2>
            <Input icon={FiUser} name="login" type="text" placeholder="Login"/>
            <Input icon={FiLock} name="password" type="password" placeholder="*******"/>
            <div>
               <input type="checkbox"/>
               <label>Manter conectado</label>
            </div>
            {/* <button type="submit">Login</button> */}
            <a href="/dashboard">Login</a>
         </Form>
      </Container>
    </div>
  )
}
