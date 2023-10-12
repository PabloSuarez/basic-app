import { FC } from 'react';
import { Checkbox, Flex } from '@chakra-ui/react';
import { Item } from '../types';

interface BoxListProps {
  list: Item[];
  filterByList: string;
  handleCheckItem: (item: Item) => void;
}

const BoxList: FC<BoxListProps> = ({ list, handleCheckItem, filterByList }) => {
  return (
    <Flex
      gap={3} direction={'column'} justifyContent={'center'}
      width={'400px'} minHeight={'400px'} border={'solid 5px'}
      borderColor={'blue.900'} borderRadius={'10px'}>
      {list
        ?.sort((a, b) => Number(a.key) - Number(b.key))
        .map(
          (item) =>
            item.showInList == filterByList && (
              <div key={item.key}>
                <Checkbox color='white' isChecked={item.isChecked} onChange={() => handleCheckItem(item)}>
                  {item.key}
                </Checkbox>
              </div>
            ),
        )}
    </Flex>
  );
};

export { BoxList };
