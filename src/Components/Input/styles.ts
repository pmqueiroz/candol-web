import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
   border: 0.2rem solid var(--color-background-darker);
   border-radius: 0.5rem;
	display: flex;
   padding: 16px;
   align-items: center;
   transition: all 0.2s;

   ${props =>
		props.isFocused &&
		css`
			color: var(--color-primary);
			border-color: var(--color-primary);
		`}

   svg {
      margin-right: 1.6rem;
	}
`;

export const TextArea = styled.input`
   background: none;
   border: 0;
   flex: 1;
   font: 500 1.3rem Roboto;

   &::placeholder {
      color: var(--color-placeholder);
   }
`;
