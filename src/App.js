
import './App.css';
import Home from './components/home';
import ResponsiveAppBar from './components/navbar';
function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Home />
    </div>
  );
}

export default App;
