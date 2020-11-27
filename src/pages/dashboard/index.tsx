import Head from 'next/head';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
   FiChevronLeft,
   FiChevronRight,
   FiChevronDown,
   FiCalendar,
   FiUser,
   FiUserPlus,
   FiUsers
} from 'react-icons/fi';
import {
   Container,
   Main,
   Header,
   AsideLeft,
   AsideRight,
   Menu,
   TaskCard,
} from '../../styles/pages/dashboard';
import logoImg from '../../assets/logo.svg';

export default function Dashboard() {
   const [ menuIsVisible, setMenuIsVisible ] = useState(false);

   function handleMenuVisibility () {
      setMenuIsVisible(!menuIsVisible);
   }

   const data = [
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
   ]

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
               <Scrollbars>
                  {data.map(task => (
                     <TaskCard key={task.trackerId}>
                        <div>
                           <div>
                              <span>08</span>
                              <span>30</span>
                              <label>{task.type}</label>
                           </div>
                           <span>{task.name}</span>
                           <span>{task.licensePlate}</span>
                           <span>{task.number1}</span>
                           <span>{task.number2}</span>
                           <span>{task.address}</span>
                           <span>{task.association}</span>
                        </div>
                     </TaskCard>
                  ))}
               </Scrollbars>
            </Main>
            <AsideRight>
            </AsideRight>
         </Container>
      </div>
   )
 }
