import styled, { css } from 'styled-components';

interface ContainerProps {
   isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: 3000;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(0, 0, 0, 0.1);

   ${props =>
		!props.isOpen &&
		css`
			display: none;
		`}
`;
