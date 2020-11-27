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
                        <div className="menu">
                           <FiCalendar />
                           <a href="#">Calendário</a>
                        </div>
                     </li>
                     <li >
                        <div className="menu submenu">
                           <FiUsers />
                           <a href="#" onClick={handleMenuVisibility}> Técnicos </a>
                           {menuIsVisible ?
                              <FiChevronDown/>
                              :  <FiChevronRight/>
                           }
                        </div>
                        {menuIsVisible ?
                           <ul>
                              <li>
                                 <div>
                                    <FiUser />
                                    <a href="#">Daniel</a>
                                 </div>
                              </li>
                              <li>
                                 <div>
                                    <FiUser />
                                    <a href="#">Virgílio</a>
                                 </div>
                              </li>
                              <li>
                                 <div>
                                    <FiUser />
                                    <a href="#">Sandro</a>
                                 </div>
                              </li>
                              <li>
                                 <div>
                                    <FiUser />
                                    <a href="#">Pitta</a>
                                 </div>
                              </li>
                              <li className="addNew">
                                 <div>
                                    <FiUserPlus />
                                    <a href="#">Adicionar</a>
                                 </div>
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
