import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
   }

   *:focus {
      outline: none;
   }

   body,
   input,
   button,
   textarea {
      font: 500 1.6rem Roboto;
      color: var(--color-text-base);
      border: none;
      background: none;
   }

   body {
      background: var(--color-background);
      color: var(--color-text-base);
   }

   :root{
      --color-primary: #863FCE;
      --color-primary-darker: #702EB2;
      --color-text-base: #535067;
      --color-text-base-smooth: rgba(83,80,103,0.3);
      --color-text-secondary: #B2AEC2;
      --color-text-inactive: #B8B8B8;
      --color-background: #ffffff;
      --color-background-darker: #E6E9EF;
      --color-background-select: #EEF0F2;
      --color-background-over: #EEEFF2;
      --color-scrollbar-thumb: #C4C4C4;
      --color-placeholder: #ACA9A9;
      --color-check: #06d6a0;
      --color-important: #ef476f;
   }

   ::-webkit-scrollbar {
      width: 0.7rem;
   }

   ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.5rem;
   }
   ::-webkit-scrollbar-thumb {
      background: var(--color-scrollbar-thumb);
      border-radius: 0.5rem;
   }

   ::-webkit-scrollbar-corner { background: transparent; }

   @media (min-width: 850px) {
      :root{
         font-size: 62.5%
      }
   }
`;
