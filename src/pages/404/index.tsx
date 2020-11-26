import Head from 'next/head';
import { useState } from 'react';
import Lottie from 'react-lottie';
import { Container, AnimationContainer } from '../../styles/pages/404';

import An404 from '../../animations/404.json'

export default function Dashboard() {
   const [animationState, setAnimationState] = useState({
      isStopped: false,
      isPaused: false
   })

   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: An404,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

   return (
      <div>
         <Head>
            <title>Candol - Página não encontrada</title>
         </Head>
         <Container>
            <AnimationContainer
               href="/dashboard"
            >
               <Lottie
                  options={defaultOptions}
                  height={700}
                  width={700}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
               />
            </AnimationContainer>
         </Container>
      </div>
   )
}
