import Head from 'next/head';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, Main, Header, AsideLeft, AsideRight } from '../../styles/pages/dashboard';
import logoImg from '../../assets/logo.svg';

export default function Dashboard() {
   return (
      <div>
         <Head>
            <title>Candol - Dashboard</title>
         </Head>

         <Container>
            <AsideLeft>
               <img src={logoImg} alt="Condol"/>
            </AsideLeft>
            <Main>
               <Header>
                  <div>
                     <button>
                        <FiChevronLeft />
                     </button>
                     <label>Anterior</label>
                  </div>
                  <span>26/11</span>
                  <div>
                     <label>Próximo</label>
                     <button>
                        <FiChevronRight />
                     </button>
                  </div>
               </Header>
            </Main>
            <AsideRight>
            </AsideRight>
         </Container>
      </div>
   )
 }
