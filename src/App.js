import './styles/global.scss'
import Header from './components/Header/Header'
import Routes from './routes';
//import Main from './pages/main/main'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;