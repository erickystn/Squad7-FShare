import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import ContentMain from './pages/ContentMain'
import Routes from './routes'
function App() {
  return (
    <div class="wrapper">
      <Routes/>
      {/* <Header/>
      <Menu/>
      <ContentMain/>
      <Footer/> */}
    </div>
  );
}

export default App;
