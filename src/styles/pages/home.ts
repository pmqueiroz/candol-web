import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: var(--color-background-darker);
   position: relative;
`;

export const Form = styled.form`
   background: var(--color-background);
   height: 50rem;
   width: 41rem;
   border-radius: 2rem;
   display: flex;
   padding: 7rem 0;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.08);

   div {
      width: 80%;
      display: flex;
      align-items: center;
      label {
         margin-left: 1rem;
      }
   }

   button, a {
      background: var(--color-primary);
      color: var(--color-background);
      width: 8rem;
      height: 4rem;
      border-radius: 0.5rem;
      transition: font-size 0.2s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-top: 2rem;

      &:hover {
         cursor: pointer;
         font-size: 1.7rem;
      }
   }
`;

export const Logo = styled.form`
   position: absolute;
   top: 5rem;
   left: 5rem;
   display: flex;
   align-items: center;

   img {
      width: 6rem;
      margin-right: 1.7rem;
   }
`;
