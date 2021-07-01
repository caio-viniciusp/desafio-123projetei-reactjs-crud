import './styles/global.scss'
import Header from './components/Header/Header'
import Routes from './routes';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;