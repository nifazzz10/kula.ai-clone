
import './App.css';
import Banner from './components/banner';
import Home from './components/home';
import ResponsiveAppBar from './components/navbar';
function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Banner />
     <Home />
     
    </div>
  );
}

export default App;
