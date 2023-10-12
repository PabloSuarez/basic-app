import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Item } from './types';
import { BoxList, Actions } from './components';

const initalStateList: Item[] = [
  { key: '1', isChecked: false, showInList: 'a' },
  { key: '2', isChecked: false, showInList: 'a' },
  { key: '3', isChecked: false, showInList: 'b' },
  { key: '4', isChecked: false, showInList: 'a' },
];

const MoveItemList = () => {
  const [list, setList] = useState<Item[]>(initalStateList);

  const handleCheckItem = (itemToChange: Item) => {
    setList(list.map(item => item.key == itemToChange.key ? { ...item, isChecked: !itemToChange.isChecked } : item));
  };

  const getListItemUpdated = (listToMove: string) => {
    return list.map(item => item.isChecked && (item.showInList !== listToMove) ? { ...item, isChecked: false, showInList: listToMove } : item);
  }

  const hanleMoveItemsTo = (listToMove: string) => {
    switch (listToMove) {
      case "a":
        setList(getListItemUpdated('a'))
        return;
      case "b":
        setList(getListItemUpdated('b'))
        return;
    }
  };

  return (
    <Flex alignContent={'center'} verticalAlign={'center'}>

      <BoxList filterByList='a' list={list} handleCheckItem={handleCheckItem} />

      <Actions hanleMoveItemsTo={hanleMoveItemsTo} />

      <BoxList filterByList='b' list={list} handleCheckItem={handleCheckItem} />

    </Flex>
  );
};

export { MoveItemList };
