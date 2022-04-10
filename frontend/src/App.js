import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
