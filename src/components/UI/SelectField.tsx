import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { Box, FormLabel, Select, SelectProps } from '@chakra-ui/react';

type OptionItem = {
  text: string;
  value: string;
};

interface SelectFieldProps extends SelectProps, FieldValues {
  labelText?: string;
  optionItemList: OptionItem[];
}

const SelectField: FC<SelectFieldProps> = ({ name = '', register, labelText, optionItemList, ...rest }) => {
  return (
    <Box p={2}>
      {labelText && <FormLabel>{labelText}</FormLabel>}
      <Select {...register(name)} {...rest}>
        {optionItemList.map((optionItem) => (
          <option key={optionItem.value} value={optionItem.value}>
            {optionItem.text}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export { SelectField };
