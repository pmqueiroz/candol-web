import Head from 'next/head';
import { useState } from 'react';
import {
   FiChevronLeft,
   FiChevronRight,
   FiChevronDown,
   FiCalendar,
   FiUser,
   FiUserPlus,
   FiUsers
} from 'react-icons/fi';
import { Container, Main, Header, AsideLeft, AsideRight, Menu } from '../../styles/pages/dashboard';
import logoImg from '../../assets/logo.svg';

export default function Dashboard() {
   const [ menuIsVisible, setMenuIsVisible ] = useState(false);

   function handleMenuVisibility () {
      setMenuIsVisible(!menuIsVisible);
   }

   return (
      <div>
         <Head>
            <title>Candol - Dashboard</title>
         </Head>

         <Container>
            <AsideLeft>
               <img src={logoImg} alt="Condol"/>
               <Menu>
                  <ul>
                     <li>
                        <FiCalendar />
                        <a href="#">Calendário</a>
                     </li>
                     <li >
                        <FiUsers />
                        <a href="#" onClick={handleMenuVisibility}>
                           Técnicos
                           {menuIsVisible ?
                              <FiChevronDown/>
                           :  <FiChevronRight/>
                           }
                        </a>
                        {menuIsVisible ?

                           <ul>
                              <li>
                                 <FiUser />
                                 <a href="#">Daniel</a>
                              </li>
                              <li>
                                 <FiUser />
                                 <a href="#">Virgílio</a>
                              </li>
                              <li>
                                 <FiUser />
                                 <a href="#">Sandro</a>
                              </li>
                              <li>
                                 <FiUser />
                                 <a href="#">Pitta</a>
                              </li>
                              <li className="addNew">
                                 <FiUserPlus />
                                 <a href="#">Adicionar</a>
                              </li>
                           </ul>
                        : null
                        }
                     </li>
                  </ul>
               </Menu>
               <div className="user">
                  <img src="https://media.thetab.com/blogs.dir/90/files/2019/08/plush-toy.jpeg" alt="Ronaldo"/>
                  <span>Ronaldo Gaúcho</span>
               </div>
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
