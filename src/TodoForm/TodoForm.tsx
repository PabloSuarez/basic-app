import { FC } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button, FormControl, Heading } from '@chakra-ui/react';
import { InputTextField, SelectField } from 'src/components/UI';
import { LIST_TASK_STATUS_OPTIONS } from './const';

const TodoForm: FC = () => {
  const { handleSubmit, register } = useForm();

  const handleSubmitForm = (fields: FieldValues) => {
    console.log('geeting fields', fields);
    return 'algo';
  };

  return (
    <>
      <Heading as="h1" size="2xl" color={'white'} pb={6}>
        New Task {'{}'}
      </Heading>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormControl color={'whiteAlpha.800'}>
          <InputTextField register={register} placeholder="Title" name="title" />
          <InputTextField register={register} placeholder="description" name="description" />
          <SelectField
            placeholder="status"
            optionItemList={LIST_TASK_STATUS_OPTIONS}
            register={register}
            name="status"
          />
          <Button type="submit" bgColor={'white'} color={'blue.800'} px={20} size={'md'} mt={5}>
            Create
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export { TodoForm };
