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
   FiUsers,
   FiEdit2,
   FiCheckCircle,
   FiMapPin,
   FiPlus
} from 'react-icons/fi';
import {
   Container,
   Main,
   Header,
   AsideLeft,
   AsideRight,
   Menu,
   TaskCard,
   TaskInfo,
   TaskTime,
   TaskView,
   TaskTools,
   NoteCard,
} from '../../styles/pages/dashboard';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';

export default function Dashboard() {
   const [ menuIsVisible, setMenuIsVisible ] = useState(false);
   const [ modalIsOpen, setIsOpen] = useState(false);

   function handleToggleModalVisibility() {
      setIsOpen(!modalIsOpen);
   }

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
   const notes = [
      {
         id: 1,
         message: "Verificar se o equipamento de 9 horas é um MXT",
      },
      {
         id: 2,
         message: "Acompanhar o técnico até a chegada, e ao chegar informar ao cliente para dar autorização na entrada",
      }
   ]

   return (
      <div>
         <Head>
            <title>Candol - Dashboard</title>
         </Head>

         <Container>
            <Modal
               isOpen={modalIsOpen}
               onRequestClose={handleToggleModalVisibility}
               contentLabel="Example Modal"
            >aaaa
            </Modal>
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
                        <div className="menu submenu" onClick={handleMenuVisibility}>
                           <FiUsers />
                           <a>Técnicos</a>
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
                        <TaskView>
                           <TaskTime>
                              <span>08<span>30</span></span>
                              <label>{task.type}</label>
                           </TaskTime>
                           <TaskInfo>
                              <div className="namelicense">
                                 <span>{task.name}</span>
                                 <span>{task.licensePlate}</span>
                              </div>
                              <span className="number1">{task.number1}</span>
                              <span className="number2">{task.number2}</span>
                              <span className="address">{task.address}</span>
                              <span className="association">{task.association}</span>
                           </TaskInfo>
                           <TaskTools>
                              <FiEdit2 />
                              <FiCheckCircle />
                              <FiMapPin />
                           </TaskTools>
                        </TaskView>
                     </TaskCard>
                  ))}
               </Scrollbars>
            </Main>
            <AsideRight>
               <h2>Notas</h2>

               {notes.map(note => (
                  <NoteCard key={note.id}>
                     <p>{note.message}</p>

                  </NoteCard>
               ))}

               <FiPlus onClick={handleToggleModalVisibility}/>
            </AsideRight>
         </Container>
      </div>
   )
 }
