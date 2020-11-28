import {
   InputHTMLAttributes,
   ComponentType,
   FunctionComponent,
   useState,
   useCallback
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container , TextArea } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
	icon?: ComponentType<IconBaseProps>;
}

const Input: FunctionComponent<InputProps> = ({
	name,
	icon: Icon,
	...rest
}) => {
   const [isFocused, setIsFocused] = useState(false);

   const handleInputFocus = useCallback(() => {
		setIsFocused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

   return (
      <Container isFocused={isFocused}>
         {Icon && <Icon size={20} />}
         <TextArea
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
         ></TextArea>
      </Container>
   )
}

export default Input;
