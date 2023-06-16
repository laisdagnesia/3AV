import NavBarSite from './components/Navbar'
import About from './pages/about';
import Home from './pages/home';


function App() {

  return (
    <div className="App">
      <NavBarSite />
      <Home />
      <About />
    </div>
  );
}

export default App;