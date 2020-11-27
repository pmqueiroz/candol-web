import { FunctionComponent } from 'react'
import { Container } from './styles';

interface ModalProps {
   id: string;
   isOpen: boolean;
   onRequestClose(): void;

}

const Modal: FunctionComponent<ModalProps> = ({id, isOpen, onRequestClose, children}) => {
   function handleCloseModal (e) {
      if(e.target.id === id) onRequestClose()
   }

   return (
      <Container
         id={id}
         isOpen={isOpen}
         onClick={handleCloseModal}
      >
         {children}
      </Container>
   )
}

export default Modal;
