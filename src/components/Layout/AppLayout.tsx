import { Box, Container } from '@chakra-ui/react';
import { FC } from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box pt={'20'} minHeight={'100vh'} bgColor={'blue.900'}>
      <Container padding={20} bgColor={'blue.800'} textAlign={'center'}>
        {children}
      </Container>
    </Box>
  );
};

export { AppLayout };
