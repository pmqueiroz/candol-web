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
   padding: 5rem;
`;

export const Header = styled.div`
   display: flex;
   flex: 1;
   justify-content: space-between;
   align-items: center;

   span {
      font: 500 4.8rem Roboto;
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
         height: 6rem;
         width: 6rem;
         border-radius: 1rem;
         margin: 2rem;
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
   background: var(--color-background);
`;
