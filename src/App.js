
import './App.css';
import Apifetch from './components/api';
import Home from './components/home';
import ResponsiveAppBar from './components/navbar';
function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Apifetch />
     <Home />
     
    </div>
  );
}

export default App;
