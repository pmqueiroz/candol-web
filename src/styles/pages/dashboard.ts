import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 100vh;
   align-items: stretch;
   background: var(--color-background);
`;

export const Main = styled.div`
   display: flex;
   background: var(--color-background-darker);
   width: 130rem;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   padding: 5rem;
`;

export const Header = styled.div`
   display: flex;
   flex: 1;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 5rem;

   span {
      font: 700 4.8rem Roboto;
      color: var(--color-primary);
   }

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      button {
         width: 3.5rem;
         height: 3.5rem;
         border: 2px solid var(--color-text-secondary);
         border-radius: 1rem;
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 0;
         transition: border-color 0.2s;
         svg {
            transition: color 0.2s;
            font-size: 2rem;
            color: var(--color-text-secondary);
         }

         &:hover {
            border-color: var(--color-primary);
            cursor: pointer;
            svg {
               color: var(--color-primary);
            }
         }
      }
      label {
         margin: 0 2rem;
         font: 500 1.8rem Roboto;
      }
   }
`;

export const AsideLeft = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   margin: 6rem 3rem 3rem 3rem;
   flex: 1;
   background: var(--color-background);
   div.user {
      display: flex;
      justify-content: center;
      align-items: center;
      font: 500 1.8rem Roboto;
      img {
         height: 4rem;
         width: 4rem;
         border-radius: 1rem;
         margin-right: 1.5rem;
      }
   }
`;

export const Menu = styled.nav`
   padding-left: 4rem;
   width: 100%;
   font: 500 2rem Roboto;
   line-height: 5rem;
   ul {
      list-style: none;
      width: 100%;

      li div{
         display: flex;
         align-items: center;
      }

      .submenu {
         display: flex;
         align-items: center;
         justify-content: space-between;

         svg:last-of-type {
            margin-left: auto;
            margin-right: 0.5rem;
         }
      }

      .menu {
         padding-left: 1rem;

         &:hover {
            background: var(--color-background-darker);
            border-radius: 1rem;
            cursor: pointer;
         }
      }

      li a {
         color: var(--color-text-base);
         text-decoration: none;
         padding-left: 1rem;
      }

      ul li {
         margin-left: 4rem;
         border-radius: 1rem;
         transition: transform 0.2s;
         &:hover {
            transform: translateX(0.7rem);
            * {
               color: var(--color-primary);
            }
         }
      }

      .addNew {
         * {
            color: var(--color-text-inactive);
            font: 400 2rem Roboto;
         }
      }
   }
`;

export const AsideRight = styled.div`
   display: flex;
   flex: 1;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   padding: 6rem 3rem 3rem 3rem;
   background: var(--color-background);

   svg {
      margin: 1.5rem 0 0 auto;
      font-size: 2rem;
      stroke-width: 0.35rem;

      &:hover {
         cursor: pointer;
      }
   }
`;

export const TaskCard = styled.div`
   width: auto;
   height: auto;
   padding: 0 5%;
   margin-top: 1.6rem;

   & + div {
      margin-top: 4rem;
   }
`;

export const TaskView = styled.div`
   width: 100%;
   height: 16rem;
   background: var(--color-background);
   box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.08);
   border-radius: 2rem;
   display: flex;
   justify-content: start;
   flex-direction: row;
`;

export const TaskInfo = styled.div`
   flex: 1;
   display: grid;
   padding: 2rem 1rem;
   grid-template-columns: 1fr 4fr;
   grid-template-rows: 1fr 1fr 1fr;
   grid-template-areas:
      "namelicense namelicense"
      "number1 address"
      "number2 association";

   font: 500 1.7rem Roboto;

   .namelicense {
      grid-area: namelicense;
      span {
         font: 500 2.3rem Roboto;

         & + span {
            margin-left: 1rem;
            font: 500 1.7rem Roboto;
         }
      }
   }
   .number1 {
      grid-area: number1;
   }
   .number2 {
      grid-area: number2;
   }
   .address {
      grid-area: address;
   }
   .association{
      grid-area: association;
   }
`;

export const TaskTime = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 15rem;
   box-shadow: none;
   border-radius: 2rem 0 0 2rem;
   background: var(--color-background-over);

   span {
      font: 500 7rem Roboto;
      color: var(--color-primary);

      span {
         font: 500 3rem Roboto;
      }
   }

   label {
      font: 500 2rem Roboto;
   }
`;

export const TaskTools = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   padding: 0 2rem;

   svg {
      font-size: 2.5rem;
      transition: transform 0.2s;
      color: var(--color-text-secondary);

      &:hover {
         cursor: pointer;
         transform: translateY(-0.1rem);
      }
   }
`;

export const NoteCard = styled.div`
   width: 100%;
   height: auto;
   margin-top: 2rem;
   padding: 1rem;
   background: var(--color-background-darker);
   border-radius: 1rem;
   font: 400 1.6rem Roboto;
`;
