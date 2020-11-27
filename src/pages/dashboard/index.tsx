import Head from 'next/head';
import { useState } from 'react';
import { Form } from '@unform/web';
import Input from '../../Components/TextAreaInput/index'
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
   AddNote
} from '../../styles/pages/dashboard';
import logoImg from '../../assets/logo.svg';
import Modal from '../../Components/Modal/index';

export default function Dashboard() {
   const [ menuIsVisible, setMenuIsVisible ] = useState(false);
   const [ modalIsOpen, setIsOpen] = useState(false);
   const [ notes, setNotes] = useState([]);

   function handleToggleModalVisibility() {
      setIsOpen(!modalIsOpen);
   }

   function handleMenuVisibility () {
      setMenuIsVisible(!menuIsVisible);
   }

   function handleAddNewNote (data) {
      const newNote = {
         id: notes.length + 1,
         message: data.note,
      }

      setNotes(oldNotes => [...oldNotes, newNote] )
      console.log(notes)
   }

   const data = [
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391231611231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128395671231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 91283912124131231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 9128391121231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
      {
         name: "Pericleiton Rasta",
         licensePlate: "KKK 2B76",
         trackerId: 91283911112231231,
         number1: "71 9 9888-9978",
         number2: "71 9 8889-8879",
         association: "GTBlock",
         address: "Rua da Ficção, Número 1, Quadra B",
         type: "Instalação"
      },
   ]
   // const notes = [
   //    {
   //       id: 1,
   //       message: "Verificar se o equipamento de 9 horas é um MXT",
   //    },
   //    {
   //       id: 2,
   //       message: "Acompanhar o técnico até a chegada, e ao chegar informar ao cliente para dar autorização na entrada",
   //    }
   // ]

   return (
      <div>
         <Head>
            <title>Candol - Dashboard</title>
         </Head>

         <Modal
            id="ModalAddNote"
            isOpen={modalIsOpen}
            onRequestClose={handleToggleModalVisibility}
         >
            <AddNote>
               <h2>Nova Nota</h2>
               <Form onSubmit={handleAddNewNote}>
                  <Input name="note"/>
                  <button type="submit">
                     <FiCheckCircle />
                  </button>
               </Form>
            </AddNote>
         </Modal>
         <Container hasModalOpened={modalIsOpen}>
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
