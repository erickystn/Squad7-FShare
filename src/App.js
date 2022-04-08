import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

function App() {
  return (
    // <div class="wrapper">
    //   <Routes />
    // </div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
