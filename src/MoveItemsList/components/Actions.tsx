import { Button, Flex } from '@chakra-ui/react'
import { FC } from 'react';

interface ActionsProps {
  hanleMoveItemsTo: (listToMove: string) => void;
}

const Actions: FC<ActionsProps> = ({ hanleMoveItemsTo }) => {
  return (
    <Flex padding={5} direction={'column'} justify={'center'}>
      <Button bgColor={'blue.900'} color={'white'} onClick={() => hanleMoveItemsTo('b')} margin={'10px 0'} width={'80px'}>
        {'>'}
      </Button>
      <Button bgColor={'blue.900'} color={'white'} onClick={() => hanleMoveItemsTo('a')} margin={'10px 0'} width={'80px'}>
        {'<'}
      </Button>
    </Flex>

  )
}

export { Actions }