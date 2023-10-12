import { FC } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Box, FormLabel, Input, InputProps } from '@chakra-ui/react';

interface InputTextFieldProps extends InputProps, FieldValues {
  labelText?: string;
  register: UseFormRegister<FieldValues>;
}

const InputTextField: FC<InputTextFieldProps> = ({ name = '', register, labelText, ...rest }) => {
  return (
    <Box p={2}>
      {labelText && <FormLabel>{labelText}</FormLabel>}
      <Input {...register(name)} {...rest} />
    </Box>
  );
};

export { InputTextField };
