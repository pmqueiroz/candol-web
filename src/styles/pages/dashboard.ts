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
         svg {
            font-size: 2rem;
            color: var(--color-text-secondary);
         }
      }
      label {
         margin: 0 1rem;
         font: 500 1.8rem Roboto;
      }
   }
`;

export const AsideLeft = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   margin: 10rem 3rem 3rem 3rem;
   flex: 1;
   background: var(--color-background);
`;

export const AsideRight = styled.div`
   display: flex;
   flex: 1;
   background: var(--color-background);
`;
